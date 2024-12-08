/* All environment variables:
    * GEMINI_API_KEY: Your API key from the Gemini API
    * GEN: The model you want to use
    * PAGE_TITLE: The title of the page
    * PAGE_DES: The description of the page
    * LIMIT: The maximum number of characters to generate
    * PORT: The port to run the server on 
 */


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold
} = require("@google/generative-ai");
const { link } = require('fs');

const app = express();
const port = process.env.PORT;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(bodyParser.json());


const apiKey = process.env.GEMINI_API_KEY;
const GenModel = String(process.env.GEN);
const PageTitle = String(process.env.PAGE_TITLE);
const PageDescription = String(process.env.PAGE_DES);
const Limit = Number(process.env.LIMIT);
const genAI = new GoogleGenerativeAI(apiKey);

// Serve interface.ejs at the root URL with dynamic title
app.get('/', (req, res) => {
    res.render('interface', { title: PageTitle, description: PageDescription, limit: Limit });
});

const model = genAI.getGenerativeModel({
    model: GenModel,
});

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

app.post('/translate', async (req, res) => {
    const { text } = req.body;
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(text);
        res.json({ translatedText: result.response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).send('Translation error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
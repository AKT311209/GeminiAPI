# GeminiAPI Project

## Overview

GeminiAPI is a web application that leverages the Google Generative AI to perform various tasks such as text translation, summarization, content creation, paraphrasing, and question answering. The application provides a user-friendly interface for inputting text, processing it through the AI model, and displaying the output.

## Features

- **Text Translation**: Translate text using the Google Generative AI.
- **Text Summarization**: Summarize long pieces of text into concise summaries.
- **Content Creation**: Generate articles, blog posts, and other written content.
- **Paraphrasing**: Rephrase sentences or paragraphs to improve readability or avoid plagiarism.
- **Question Answering**: Provide answers to questions based on provided context.
- **Character Count**: Displays the character count of the input text.
- **Custom Text Limit**: Set a custom limit for the input text length.
- **Copy to Clipboard**: Copy the translated text to the clipboard with a single click.
- **Loading Spinner**: Visual feedback while the translation is being processed.

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/GeminiAPI.git
    cd GeminiAPI
    ```

2. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    # Environment Variables

    # Your Gemini API key
    GEMINI_API_KEY=your_gemini_api_key

    # Model selection (fine-tuned or standard)
    GEN=your_model

    # Page title for the web interface
    PAGE_TITLE=Your Page Title

    # Page description for the web interface
    PAGE_DES=Your Page Description

    # Custom limit for input text length
    LIMIT=1000

    # Port number for the application
    PORT=37742

    # Temperature setting for the AI model (controls creativity)
    TEMP=0.7

    # Title for the input text box
    INP_TITLE=Input

    # Title for the output text box
    OUT_TITLE=Output
    ```

3. **Build and run the Docker container**:
    ```sh
    docker-compose up --build
    ```

## Usage

1. **Access the application**:
    Open your web browser and navigate to `http://localhost:37742`.

2. **Process text**:
    - Enter the text you want to process in the input box.
    - Click the "Process" button to perform the selected task (e.g., translation, summarization, content creation, paraphrasing, or question answering).
    - The processed text will be displayed in the output box.

3. **Copy processed text**:
    - Click the "Copy" button to copy the processed text to the clipboard.

4. **Clear input**:
    - Click the "Clear" button to clear the input text box.

## File Structure

- `.dockerignore`: Specifies files and directories to be ignored by Docker.
- `compose.yml`: Docker Compose configuration file.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Lists the project dependencies.
- `Dockerfile`: Docker configuration file for building the application image.
- `public/interface.ejs`: EJS template for the web interface.
- `index.js`: Main server file that handles API requests and serves the web interface.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Google Generative AI](https://cloud.google.com/generative-ai) for providing the translation model.
- [Express](https://expressjs.com/) for the web framework.
- [EJS](https://ejs.co/) for the templating engine.
## Supported Models

GeminiAPI supports both fine-tuned and standard models of the Google Generative AI. Users can choose the appropriate model based on their specific needs for content generation and translation.

## Model Selection

Users can select between fine-tuned and standard models by setting the `GEN` environment variable in the `.env` file. Fine-tuned models are optimized for specific tasks, while standard models offer general-purpose capabilities.
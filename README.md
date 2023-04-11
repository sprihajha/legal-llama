# Legal-llama (Chatbot)
###### The chatbot is designed to respond to user messages using a pre-defined set of rules.

> Built for [**Generative AI hackathon**](https://hacknyc.co/) held at BetaWorks NYC.
> 
> **Date:** 01st April, 2023
> 
> **Team Members:** Spriha Jha, Mayuri Upadhyaya, Debopriyo Bhowmick
> 
> **Prize Won:** $3000 credits for best use of [Cohere](https://cohere.ai/)

### Installation
To run the application on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone`
2. Navigate to the cloned directory using `cd <repository-name>`
3. Install dependencies using `npm install`
4. Set up your *.env* file. Follow instruction on [OpenAI](https://platform.openai.com/account/api-keys) and [Pinecone](https://www.pinecone.io/) for API keys. 
5. Ingest the data using `npm run ingest`
6. Start the application using `npm run dev`
7. The application will be available at http://localhost:3000/                                           

### Usage
To start using the chatbot, simply type a message into the text area and hit enter. The chatbot will respond with a message based on the rules defined in the application.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
This project was inspired by the [Chatbot Tutorial](https://github.com/mayooear/gpt4-pdf-chatbot-langchain) by [Mayo](https://github.com/mayooear).
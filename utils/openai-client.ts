import { OpenAI } from 'langchain/llms';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Check your OpenAI credentials.');
}

export const openai = new OpenAI({
  temperature: 0,
});

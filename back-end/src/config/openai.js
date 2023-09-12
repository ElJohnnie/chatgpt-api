// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = async (prompt) => { 
    const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response;
};

export default prompt;
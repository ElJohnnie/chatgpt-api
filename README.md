# chatgpt-api
![image](https://github.com/ElJohnnie/chatgpt-api/assets/54804502/b2bca7fa-5d5b-48db-9ba7-8c31d92c1ab9) T

### sep, 16 updated
Start voice recognition to set value at main input

### technologies
- Back-end
  - Express
  - Dotent
  - Cors
  - OpenAI api
- Front-end
    - React.js
    - Axios

### use
This project consumes the Open AI completion api, using the Text Davinci 003 model

```javascript=
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });
}
main();

// response =

{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "text-davinci-003",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}

```

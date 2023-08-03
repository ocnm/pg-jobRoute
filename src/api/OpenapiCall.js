import { Configuration, OpenAIApi } from 'openai';
import { firstLR, secondLR } from './prompts';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const OpenaiCall = async (keywords, level) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: level === 1 ? firstLR(keywords) : secondLR(keywords),
    temperature: 0,
    max_tokens: 512,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
 console.log(response.data.choices[0].text);
  return response.data.choices[0].text;
}

export default OpenaiCall;

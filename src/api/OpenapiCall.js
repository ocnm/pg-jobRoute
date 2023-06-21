import { Configuration, OpenAIApi } from 'openai';
import { testSinglePrompt } from './prompts';

const configuration = new Configuration({
  // apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  apiKey: process.env.REACT_APP_OPENAI_API_KEY_PERSONAL,
});

const openai = new OpenAIApi(configuration);

const OpenaiCall = async (keywords) => {
  const tokens = 512;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: testSinglePrompt(keywords, tokens),
    temperature: 0,
    max_tokens: 512,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  });


  // const response = await openai.listEngines()
  // console.log(response)
  
  console.log(response.data.choices[0].text)
  return response.data.choices[0].text;
}

export default OpenaiCall;

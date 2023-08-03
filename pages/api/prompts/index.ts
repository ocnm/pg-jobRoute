import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
import { NextApiHandler } from 'next';
import { firstLevelRoute, secondLevelRoute } from '@/templates/prompts'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler: NextApiHandler = async (req, res) => {

  if (req.method === 'POST') {

    const { data, l } = req.body;
    let messages: any = [];
    if (l === 1) {
      messages = firstLevelRoute(data);
    } else {
      messages = secondLevelRoute(data);
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: messages,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.data.choices[0].message);

    res.status(200).json(response.data.choices[0].message);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default handler;


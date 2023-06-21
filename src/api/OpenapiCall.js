import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const OpenaiCall = async (keywords) => {
  const { currentOcupation, desiredOccupation, skills, place } = keywords;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `
            My occupation: ${currentOcupation}
            My skills: ${skills};
            I look for a job in: ${place}
            desired profession: ${desiredOccupation}

Please, return your response in json format following next template without any additional symbols outside json object. Please, double check that json object will be finalized on the number of tokens provided:
{
                  "occupationCodes": [ {nocCode: '', name: ''}, //Array of objects of most relevant occupation names and codes according to NOC of Canada 2016 ]
                  "generalSkills": [
                    "skill1",
                    "skill2"
                  ], //... etc. return necessary skills needed for searched profession
                  "certifiedSkills": [ //return set of skilled need to be certified, leave empty if no obligatory certifications
                    {
                      "name": "skill1",
                      "description": "", // describe why it need to be certified
                      "links": [ //provide link where to get certified, leave empty if no link
                        {
                          "name": "string", // institution name
                          "link": "string" // address to the website if applicable
                        }
                      ]
                    }
                  ],
                  "salary": [ //return min, average, max salary and currency code according the ISO 4217 of searched profession.
                    0,
                    0,
                    0,
                    "currency"
                  ],
                  "courses": [ //return set of 3 courses as recomendation to gain the occupation faster.
                    {
                      "name": "string",
                      "description": "string", // describe why it need to be taken
                      "links": [ //provide link where to get certified, leave empty if no link
                        {
                          "name": "string", // institution name
                          "link": "string" // address to the website if applicable
                        }
                      ]
                    }
                  ]
                }
      `,
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data.choices[0].text)
  return response.data.choices[0].text;
}

export default OpenaiCall;

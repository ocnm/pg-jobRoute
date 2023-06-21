export const testSinglePrompt = (keywords) => {
  const { currentOcupation, desiredOccupation, skills, place } = keywords;


  return `
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
`
}

export const testSinglePromptV2 = (keywords, tokens) => {
  const { currentOcupation, desiredOccupation, skills, place } = keywords;

  return `
            My occupation: ${currentOcupation}
            My skills: ${skills}.
            I am looking for a job in ${place}
            desired profession: ${desiredOccupation}

Return your response in JSON format following the next template without any additional symbols outside the JSON object. Reply length should be not more than ${tokens} tokens.
Template JSON object:
{
                  "occupationCodes": [ {nocCode: '', name: ''}, //Array of objects of most relevant occupation names and codes according to NOC of Canada 2016 ]
                  "generalSkills": [
                    "skill1",
                    "skill2"
                  ], //... etc. return necessary skills needed for the searched profession
                  "certifiedSkills": [ //return set of skilled need to be certified, leave empty if no obligatory certifications
                    {
                      "name": "skill1",
                      "description": "", // describe why it needs to be certified
                      "links": [ //provide link where to get certified, leave empty if no link
                        {
                          "name": "string", // institution name
                          "link": "string" // address to the website if applicable
                        }
                      ]
                    }
                  ],
                  "salary": [ //return min, average, max salary, and currency code according to the ISO 4217 of the searched profession.
                    0,
                    0,
                    0,
                    "currency"
                  ],
                  "courses": [ //return set of 3 courses as a recommendation to gain the occupation faster.
                    {
                      "name": "string",
                      "description": "string", // describe why it needs to be taken
                      "links": [ //provide link where to get certified, leave empty if no link
                        {
                          "name": "string", // institution name
                          "link": "string" // address to the website if applicable
                        }
                      ]
                    }
                  ]
                }
`
}

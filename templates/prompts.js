export const firstLevelRoute = (keywords) => {
  const { p, s } = keywords;

  return [
    {
      role: 'system',
      content: 'You are an expert in methodology, tutoring, mentoring, education, teaching',
    },
    {
      role: 'system',
      content: `
Build a step-by-step learning path to become a self-educated ${p} in ${s}. Provide 10 milestones, starting from entry-level to complex topics. Each milestone should be based on the previous one.
Return a JSON object using the following template:
  [
    {"title": "Topic Title (Up to 5 words)", "desc": "Description (12 words max)"},
    ... (additional topics),
  ]
}
`,
    },
  ]
}

export const secondLevelRoute = (keywords) => {
  const { topic } = keywords;

  return [
    {
      role: 'system',
      content: 'You are an expert in methodology, tutoring, mentoring, education, teaching',
    },
    {
      role: 'system',
      content: `
Build a concise, focused learning path to become an expert in "${topic}" Create a 6-step study program that progresses from easy to complex topics, each building on the previous one. Provide brief titles and descriptions for each step.

Return a JSON object using the following template:
  [
    {"title": "Topic Title (Up to 5 words)", "desc": "Description (12 words max)"},
    ... (additional topics),
  ]
}
`  ,
    },
  ]

}


export const firstLR = (keywords) => {
  const { p, s } = keywords;

  return `
Build a step-by-step learning path to become a self-educated ${p}${s && `in ${s}`}. Provide 10 milestones, starting from entry-level to complex topics. Each milestone should be based on the previous one.
Return a JSON object using the following template:
[
{"title": "Topic Title (Up to 5 words)", "desc": "Description (12 words max)"},
... (additional topics),
]
`
}

export const secondLR = (topic) => {
  return `
Build a concise, focused learning path to become an expert in "${topic}" Create a 6-step study program that progresses from easy to complex topics, each building on the previous one. Provide brief titles and descriptions for each step.
Return a JSON object using the following template:
[
{"title": "Topic Title (Up to 5 words)", "desc": "Description (12 words max)"},
... (additional topics),
]
`  }

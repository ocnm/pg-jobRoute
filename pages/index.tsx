import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  const [profession, setProfession] = useState('Front end developer');
  const [skill, setSkill] = useState('Angular');
  const [data, setData] = useState<any>([]);

  const handleRequest = async (data: any, l: number) => {
    const response = await fetch('/api/prompts/', {
      method: 'POST',
      body: JSON.stringify({ data, l }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const result = await response.json()

    const isJsonStr = (str: string): boolean => {
      try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
    }

    if (isJsonStr(result.content)) setData(JSON.parse(result.content));
    else alert(result.content);

  }

  const handleChange = (e: any, setter: any) => {
    setter(e.target.value);
  }

  const handleSubmit = async () => {
    handleRequest({ p: profession, s: skill }, 1);
  };

  const handleNode = async (title: any) => {
    const topic = `${title.title} - ${title.desc}`
    handleRequest({ topic }, 2);
  }

  const firstNode = (response: any) => response.map((point: any, i: any) => (
    <div key={i} onClick={() => handleNode(point)}>
      <button>{point.title} - {point.desc}</button>
    </div>
  ));

  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-screen h-screen gap-4 bg-gradient'>
      <input onChange={(e) => handleChange(e, setProfession)} value={profession} placeholder='type the profession' type="text" />
      <input onChange={(e) => handleChange(e, setSkill)} value={skill} placeholder='type the skill' type="text" />
      <button onClick={handleSubmit}>Generate</button>
      <div>
        {data && firstNode(data)}
      </div>
    </div>

  );
}

export default Home;

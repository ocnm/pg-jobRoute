import { Inter } from 'next/font/google'
import { useState } from 'react';
import LoaderScreen from '@/components/LoaderScreen';
// import ReCAPTCHA from 'react-google-recaptcha';

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  const [loader, setLoader] = useState(false);
  const [profession, setProfession] = useState('Front end developer');
  const [skill, setSkill] = useState('Angular');
  const [data, setData] = useState<any>([]);

  const s = {
    input: 'p-5 m-3 rounded-md shadow-2xl blur-xs text-xl',
    submitBtn: 'border-solid border-2 rounded-md p-3 m-3 text-xl hover:rounded-full active:bg-white active:text-blue-700',
    listBtn: 'border-2 border-blue-500 m-1 rounded-lg p-3 text-xl text-black-500 hover:shadow-xl',
  }


  const handleRequest = async (data: any, l: number) => {
    setLoader(true);
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

    setLoader(false);
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
    <button
      className={s.listBtn}
      key={i}
      onClick={() => handleNode(point)}>
      {point.title} - {point.desc}
    </button>
  ));

  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen flex-nowrap gap-4 bg-gradient'>
      {!loader &&
        <>
          <input
            className={s.input}
            onChange={(e) => handleChange(e, setProfession)}
            value={profession} placeholder='type the profession'
            type="text"
          />

          <input
            className={s.input}
            onChange={(e) => handleChange(e, setSkill)}
            value={skill}
            placeholder='type the skill'
            type="text"
          />

          <button className={s.submitBtn} onClick={handleSubmit}>Generate</button>
          <div className='flex flex-col justify-between'>
            {data && firstNode(data)}
          </div>
        </>
      }
      {loader && <LoaderScreen />}
    </div>

  );
}

export default Home;

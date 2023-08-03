import { useState } from 'react';
import OpenaiCall from './api/OpenapiCall';

const App = () => {
  const [profession, setProfession] = useState();
  const [skill, setSkill] = useState();
  const [data, setData] = useState();

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }

  const handleSubmit = async (event) => {
    setData(JSON.parse(await OpenaiCall({ p: profession, s: skill }, 1)));
  };

  const handleNode = async (e, title) => {
    setData(JSON.parse(await OpenaiCall(title, 2)));
  }

  const firstNode = (data) => data.map((point, i) => (
    <div key={i} onClick={(e) => handleNode(e, point.title, i)}>
      <span>{point.title}</span> - <span>{point.desc}</span>
    </div>
  ));

  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-screen h-screen gap-4 bg-gradient'>
      <input onChange={(e) => handleChange(e, setProfession)} placeholder='type the profession' type="text"/>
      <input onChange={(e) => handleChange(e, setSkill)} placeholder='type the skill' type="text" />
      <button onClick={handleSubmit}>Generate</button>
      <div>
        {data && firstNode(data)}
      </div>
    </div>

  );
};

export default App;

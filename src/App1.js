import { useState } from 'react';
import OpenaiCall from './api/OpenapiCall';
import { initialState } from './state/states';
import StartScreen from './components/StartScreen';
import LoaderScreen from './components/LoaderScreen';
import ResultScreen from './components/ResultScreen';
import Generate from './components/Generate';
//testData
import openaiResponse from './api/replyExample.json';

const App = ({ state, updateState }) => {
  const [response, setResponse] = useState();
  const [captcha, setCaptcha] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [mockBtn, setMockBtn] = useState(true);

  const handleData = (event, prop) => {
    updateState({ ...state, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      state.currentOcupation &&
      state.place &&
      state.skills &&
      state.desiredOccupation &&
      captcha
    ) {
      setShowLoader(true);
      setShowForm(false);

      setResponse(JSON.parse(await OpenaiCall(state)));
      // setResponse(openaiResponse);

      setShowLoader(false);
    } else
      alert(
        "Please check the fields. Not all of them are filled in or captcha didn't passed",
      );
  };

  const handleReset = () => {
    setCaptcha(false);
    setResponse(null);
    setShowForm(true);
    updateState(initialState);
    setMockBtn(true);
  };


  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-screen h-screen gap-4 bg-gradient'>
      {response && <ResultScreen handleReset={handleReset} response={response} />}

      {showLoader && <LoaderScreen />}

      {showForm && <StartScreen
        initialState={initialState}
        state={state}
        updateState={updateState}
        handleSubmit={handleSubmit}
        handleData={handleData}
        setResponse={setResponse}
        setCaptcha={setCaptcha}
        setShowForm={setShowForm}
        mockBtn={mockBtn}
        setMockBtn={setMockBtn}
      />}

      <Generate />

    </div>

  );
};

export default App;

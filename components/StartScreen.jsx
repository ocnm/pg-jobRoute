import ReCAPTCHA from 'react-google-recaptcha';
import { mockState } from '../state/states';

const StartScreen = ({
  initialState,
  state,
  updateState,
  handleData,
  setCaptcha,
  handleSubmit,
  mockBtn,
  setMockBtn
}) => {

  const handleSubmitBtn = async (event) => {
    handleSubmit(event);
  };

  const handleMock = () => {
    setMockBtn((prevMockBtn) => !prevMockBtn);

    updateState(mockBtn ? { ...state, ...mockState } : initialState);
  };

  const captcha = () => {
    return (
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_TEST_SITE_KEY}
        onChange={() => setCaptcha(true)}
      />
    )
  }

  const s = {
    mainTagStyle: 'w-screen h-screen flex flex-col justify-center items-center',
    labelStyle: 'form-label flex flex-col me-3 mb-3 text-black',
    inputStyle: 'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    captionStyle: 'block text-gray-700 text-sm font-bold mb-2',
    btnStyle: 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-4 rounded',
  }

  return (
    <form onSubmit={handleSubmitBtn} className={s.mainTagStyle}>
      <label className={s.labelStyle}>
        <span className={s.captionStyle}>Current occupation:</span>
        <input
          type='text'
          onChange={(e) => handleData(e, 'currentOcupation')}
          value={state.currentOcupation}
          className={s.inputStyle}
          placeholder='Master Jedi'
        />
      </label>
      <label className={s.labelStyle}>
        <span className={s.captionStyle}>
          Skills you have and want to mention:
        </span>
        <textarea
          rows='4'
          cols='25'
          onChange={(e) => handleData(e, 'skills')}
          value={state.skills}
          className={s.inputStyle}
          placeholder='Enter 3 to 5 main skills'
        ></textarea>
      </label>
      <label className={s.labelStyle}>
        <span className={s.captionStyle}>Desired occupation:</span>
        <input
          type='text'
          onChange={(e) => handleData(e, 'desiredOccupation')}
          value={state.desiredOccupation}
          className={s.inputStyle}
          placeholder='Dart Veider'
        />
      </label>
      <label className={s.labelStyle}>
        <span className={s.captionStyle}>
          Where you plan to look for a job:
        </span>
        <input
          type='text'
          onChange={(e) => handleData(e, 'place')}
          value={state.place}
          className={s.inputStyle}
          placeholder='Canada, AB, Calgary'
        />
      </label>
      <div className='flex flex-row'>
        <input
          type='button'
          className={s.btnStyle}
          onClick={handleMock}
          value={mockBtn ? 'Try Mock Data' : 'Clear Mock Data'}
        />

        <button className={s.btnStyle} type='submit'>
          Submit
        </button>
      </div>
    </form>
  )

}

export default StartScreen;

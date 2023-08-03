import { s } from '../styles/commonStyles.js';
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

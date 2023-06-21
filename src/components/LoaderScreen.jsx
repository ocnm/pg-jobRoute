import loader from '../assets/loader.gif';
import {s} from '../styles/commonStyles';

const LoaderScreen = () => {
  return <div className={s.loaderContainerStyle}>
    <img
      src={loader}
      alt='loader'
      className={s.loaderStyle}
    />
  </div>
}

export default LoaderScreen;

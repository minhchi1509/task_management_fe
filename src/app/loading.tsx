import 'src/themes/AppLoading.scss';
import AppLogo from 'src/assets/icons/AppLogo';

const Loading = () => {
  return (
    <div className="AppLoading">
      <AppLogo style={{ height: 80, width: 80 }} />
      <div className="loading">
        Instagram Loading
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;

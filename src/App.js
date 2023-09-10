import './App.css';
import Videos from './components/Videos';
import logo from './logo.svg';
import nodejs from '../src/pictures/nodejs.png';
import css from '../src/pictures/css.png';
import reactjs from '../src/pictures/reactjs.png';
import html from '../src/pictures/html.png';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container'>
          <div className='row'>
            <Videos isChannelVerified={true} videoThumbnail={nodejs} videoTitle="Node JS tutorials" videoViews="200K" videoUploaded="1 month" />
            <Videos isChannelVerified={false} videoThumbnail={css} videoTitle="CSS tutorials" videoViews="116K" videoUploaded="8 months" />
            <Videos isChannelVerified={false} videoThumbnail={reactjs} videoTitle="React JS tutorials" videoViews="1.1M" videoUploaded="2 years" />
            <Videos isChannelVerified={true} videoThumbnail={html} videoTitle="HTML 5 tutorials" videoViews="30K" videoUploaded="2 days" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

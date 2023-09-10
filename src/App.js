import './App.css';
import Videos from './components/Videos';
import logo from './logo.svg';
import nodejs from '../src/pictures/nodejs.png';
import css from '../src/pictures/css.png';
import reactjs from '../src/pictures/reactjs.png';
import ts from '../src/pictures/ts.png';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container'>
          <div className='row'>
            <Videos videoThumbnail={nodejs} videoTitle="Node JS tutorials" videoViews="200K" videoUploaded="1 month" />
            <Videos videoThumbnail={css} videoTitle="CSS tutorials" videoViews="116K" videoUploaded="8 months" />
            <Videos videoThumbnail={reactjs} videoTitle="React JS tutorials" videoViews="1.1M" videoUploaded="2 years" />
            <Videos videoThumbnail={ts} videoTitle="Typescript tutorials" videoViews="30K" videoUploaded="2 days" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

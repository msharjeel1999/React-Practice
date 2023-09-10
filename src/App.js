import './App.css';
import Videos from './components/Videos';
import logo from './logo.svg';
import dataDetails from './data/dataDetails';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='container'>
        <div className='row'>
          {
            dataDetails.map(data => <Videos
              key={data.id}
              isChannelVerified={data.isChannelVerified}
              videoThumbnail={data.videoThumbnail}
              videoTitle={data.videoTitle}
              videoViews={data.videoViews}
              videoUploaded={data.videoUploaded}
            />
            )
          }
        </div>
      </div>
    </header >
  );
}

export default App;

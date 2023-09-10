import './App.css';
import Videos from './components/Videos';
import logo from './logo.svg';
import dataDetails from './data/dataDetails';
import PlayButton from './components/PlayButton';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='container'>
        <div className='row'>
          {
            dataDetails.map((data) => <Videos
              key={data.id}
              isChannelVerified={data.isChannelVerified}
              videoThumbnail={data.videoThumbnail}
              videoTitle={data.videoTitle}
              videoViews={data.videoViews}
              videoUploaded={data.videoUploaded}
            >
              <PlayButton
                onPlay={() => { console.log(`Currently playing "${data.videoTitle}" ...!`) }}
                onPause={() => { console.log(`Paused... "${data.videoTitle}" ...!`) }}
              >
                Play <strong style={{ color: "rgb(97 218 251)" }}>{data.videoTitle}</strong> Playlist
              </PlayButton>
            </Videos>
            )
          }
        </div>
      </div>
    </header>
  );
}

export default App;

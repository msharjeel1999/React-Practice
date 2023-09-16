import { useState } from 'react';
import './App.css';
import Videos from './components/Videos';
import logo from './logo.svg';
import dataDetails from './data/dataDetails';
import PlayButton from './components/PlayButton';
import ts from './pictures/ts.png';
import mongodb from './pictures/mongodb.png';
import playwright from './pictures/playwright.png';

function App() {

  const [allVideos, setVideo] = useState(dataDetails);

  const handleAddNew = function () {
    setVideo([...allVideos, {
      id: allVideos.length + 1,
      isChannelVerified: true,
      videoThumbnail: ts,
      videoTitle: "TypeScript tutorials",
      videoViews: "17K",
      videoUploaded: "2 years"
    },
    {
      id: allVideos.length + 2,
      isChannelVerified: false,
      videoThumbnail: mongodb,
      videoTitle: "Mongo DB tutorials",
      videoViews: "1.1M",
      videoUploaded: "3 Months"
    },
    {
      id: allVideos.length + 3,
      isChannelVerified: true,
      videoThumbnail: playwright,
      videoTitle: "Playwright tutorials",
      videoViews: "100K",
      videoUploaded: "3 hours"
    }
    ]);
    const addNewBtn = document.getElementById("addNew_btn");
    addNewBtn.disabled = true;
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='container'>
        <button id='addNew_btn' className='btn btn-success addNew_btn' onClick={handleAddNew}>Load New Videos</button>
        <div className='row'>
          {
            allVideos.map((data) => <Videos
              key={data.id}
              isChannelVerified={data.isChannelVerified}
              videoThumbnail={data.videoThumbnail}
              videoTitle={data.videoTitle}
              videoViews={data.videoViews}
              videoUploaded={data.videoUploaded}
            >
              <PlayButton
                onPlay={() => { console.log(`Currently playing "${data.videoTitle}" ...!`) }}
                onPause={() => { console.log(`Paused "${data.videoTitle}" ...!`) }}
              >
                <strong style={{ color: "rgb(97 218 251)" }}>{data.videoTitle}</strong> Playlist
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

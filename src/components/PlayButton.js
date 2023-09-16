import React, { useState } from 'react';

export default function PlayButton({ onPlay, onPause, children }) {

    const [currentlyPlayingStatus, setCurrentlyPlayingStatus] = useState(false);

    const handleOnClick = function (event) {
        event.stopPropagation();
        if (currentlyPlayingStatus) {
            onPause();
            setCurrentlyPlayingStatus(currentlyPlayingStatus => !currentlyPlayingStatus);
        }
        else {
            onPlay();
            setCurrentlyPlayingStatus(currentlyPlayingStatus => !currentlyPlayingStatus);
        }
    }

    const playIcon = <i className="bi bi-play-fill"></i>;
    const resumeIcon = <i className="bi bi-pause-fill"></i>;

    return (
        <>
            <button type='submit' className='btn btn-outline-light' onClick={handleOnClick}>{!currentlyPlayingStatus ? playIcon : resumeIcon} {children}</button>
        </>
    )
}

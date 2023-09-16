import React from 'react'

export default function PlayButton({ onPlay, onPause, currentlyPlayingStatus = false, children }) {

    const handleOnClick = function (event) {
        event.stopPropagation();
        if (!currentlyPlayingStatus) {
            onPlay();
            currentlyPlayingStatus = !currentlyPlayingStatus;
        }
        else {
            onPause();
            currentlyPlayingStatus = !currentlyPlayingStatus;
        }
    }

    return (
        <>
            <button type='submit' className='btn btn-outline-light' onClick={handleOnClick}>{children}</button>
        </>
    )
}

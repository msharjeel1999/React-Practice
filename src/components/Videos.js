import React from 'react'

export default function Videos({ channelName = "Muhammad Sharjeel", videoThumbnail, videoTitle, videoViews, videoUploaded }) {

    return (
        <div className="col-md-3">
            <div className="d-flex flex-column align-items-center">
                <img src={videoThumbnail} alt='randomPicture' />
                <div className='videotitle'>{videoTitle}</div>
                <span className="channel"> {channelName}</span>
                <span className="views">{videoViews} Views • {videoUploaded} ago</span>
            </div>
        </div >
    )
}

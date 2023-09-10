import React from 'react'

export default function Videos({ videoThumbnail, videoTitle, videoViews, videoUploaded }) {
    const channelName = "Muhammad Sharjeel";

    return (
        <div className="col-md-3">
            <div className="d-flex flex-column align-items-center">
                <img src={videoThumbnail} alt='randomPicture' />
                <div className='videotitle'>{videoTitle}</div>
                <span className=".span"> {channelName}</span>
                <span className=".span">{videoViews} Views • {videoUploaded} ago</span>
            </div>
        </div >
    )
}

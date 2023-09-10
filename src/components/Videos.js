import React from 'react'
import verifiedBadge from '../../src/pictures/verifiedBadge.png';

export default function Videos({ channelName = "Muhammad Sharjeel", isChannelVerified, videoThumbnail, videoTitle, videoViews, videoUploaded, children }) {

    return (
        <div className="col-md-3">
            <div className="d-flex flex-column align-items-center">
                <img src={videoThumbnail} alt='randomPicture' />
                <div className='videotitle'>{videoTitle}</div>
                <span className="channel"> {channelName}{isChannelVerified && <img src={verifiedBadge} alt='verifiedBadge' className='verifiedBadge'></img>}</span>
                <span className="views">{videoViews} Views • {videoUploaded} ago</span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

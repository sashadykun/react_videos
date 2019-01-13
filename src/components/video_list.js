import React from 'react';
import VideoItem from './video_item';

const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>
    })
    

    return <div>{renderedList}</div>
}

export default VideoList;
import React, { useEffect, useRef } from 'react';
import { VideoClass } from '../styles/styles'
import TitleVid0 from '../resources/videos/Title1.webm';
import TitleVid1 from '../resources/videos/Title2.webm';
import TitleVid2 from '../resources/videos/Title3.webm';

const videoArr = [TitleVid0, TitleVid1, TitleVid2];

const Splash = ({ splashShow }) => {
    const element = useRef(null);
    useEffect(() => {
        if (element.current) {
            let count = 0;
            //Check on Loaded video file.
            element.current.addEventListener('loadeddata', (e) => {
                e.preventDefault();
                element.current.play()
            });
            //Check out ended Video Queue.
            element.current.addEventListener('ended', (e) => {
                e.preventDefault();
                if (count <= 1) {
                    count++
                    e.target.src = videoArr[count]
                } else {
                    count = 0;
                    splashShow(false);
                }
            });
        }
    });
    return (
        <VideoClass ref={element} autoPlay muted onClick={() => splashShow(false)}>
            <source src={videoArr[0]} type="video/webm" />
        </VideoClass >
    )
}

export default Splash;

import React, { useRef, useState } from 'react';
import { VideoClass } from '../styles/styles';
import BgMovie from '../resources/videos/BG.webm';
import BgSound from '../resources/sounds/BGM_Launcher.wav';
import Connect from './Connect';
import NavContainer from './containers/NavContainer';
import NewsContainer from './containers/NewsContainer';
import TermOfService from './containers/TermOfService';
import { LobbyMainStyle } from '../styles/styles'

const BgMovieView = () => {
    return (
        <VideoClass autoPlay loop muted playsInline>
            <source src={BgMovie} type="video/webm" />
        </VideoClass >
    );
}

const BgSoundController = () => {
    const element = useRef(null);
    if (element.current) element.current.volume = 0.2;

    return (
        <audio autoPlay loop ref={element}> 
            <source src={BgSound} type="audio/wav" />
        </audio>
    )
}

const MainContainer = ({ onClickPlay }) => {
    const [isNavBtn, setIsNavBtn] = useState('nav0');

    const onSelectMenu = (boo) => {
        setIsNavBtn(boo)
    }
    const containerSelect = (boo) => {
        if (boo === 'nav0') {
            return (<NewsContainer />)
        }
        if (boo === 'nav1') {
            return (<TermOfService />)
        }
    }
    return (
        <LobbyMainStyle>
            <NavContainer onSelectMenu={onSelectMenu} isNavBtn={isNavBtn} onClickPlay={onClickPlay} />
            {containerSelect(isNavBtn)}
        </LobbyMainStyle>
    )
}

const Lobby = () => {
    const [isConnected, setIsConnected] = useState(true);
    const [isPlay, setIsPlay] = useState(false);

    const onClickPlay = (boo) => {
        setIsPlay(boo)
    }
    const connectShow = (boo) => {
        setIsConnected(boo)
    }
    const playContControl = (boo) => {
        if (boo) {
            return ('')
        } else {
            return (<>
                <BgSoundController />
                <BgMovieView />
                {isConnected ? <Connect connectShow={connectShow} /> : <MainContainer onClickPlay={onClickPlay} />}
            </>)
        }
    }
    return (
        <>
            { playContControl(isPlay)}
        </>
    )
}
export default Lobby;

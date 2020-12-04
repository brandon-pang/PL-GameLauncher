import React, { useState } from 'react';
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
    return (
        <audio autoPlay loop>
            <source src={BgSound} type="audio/wav" />
        </audio>
    )
}

const MainContainer = () => {
    const [isNavBtn, setIsNavBtn] = useState('nav0');
    const onSelectMenu = (boo) => {
        setIsNavBtn(boo)
    }
    const containerSelect = (boo) => {
        console.log(boo)
        if (boo === 'nav0') {
            return (<NewsContainer />)
        }
        if (boo === 'nav1') {
            return (<TermOfService />)
        }
    }
    return (
        <LobbyMainStyle>
            <NavContainer onSelectMenu={onSelectMenu} isNavBtn={isNavBtn} />
            {containerSelect(isNavBtn)}
        </LobbyMainStyle>
    )
}

const Lobby = () => {
    const [isConnected, setIsConnected] = useState(true);
    const connectShow = (boo) => {
        setIsConnected(boo)
    }
    return (
        <>
            <BgSoundController />
            <BgMovieView />
            {isConnected ? <Connect connectShow={connectShow} /> : <MainContainer />}
        </>
    )
}
export default Lobby;

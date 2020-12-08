import React, { useState } from 'react';
import { StartHeader, MainLogo, StartTitle } from '../styles/styles'
import TeraLogo from '../resources/images/img_launcher_tera_logo.png';
import ConnectSnd from '../resources/sounds/UI_Button_Select.wav';

const ConnectSound = () => {
    return (
        <audio autoPlay>
            <source src={ConnectSnd} type="audio/wav" />
        </audio>
    )
}

const Connect = ({ connectShow }) => {
    const [isBtnStart, setIsBtnStart] = useState(false);
    const [serverText, setServerText] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        setIsBtnStart(true);
        setServerText("Connecting to server ...");

        setTimeout(() => { setServerText("Connected"); }, 800);
        setTimeout(() => { connectShow(false); }, 1700);
    }

    const titleShow = (isShow) => {
        if (!isShow) return <StartTitle onClick={handleClick}>Press the<span className='button-icon'></span>button to play</StartTitle>
        if (isShow) return <StartTitle>{serverText}</StartTitle>
    }

    return (
        <StartHeader>
            {
                isBtnStart && <ConnectSound />
            }
            <MainLogo src={TeraLogo} />
            {titleShow(isBtnStart)}
        </StartHeader>
    )
}

export default Connect;
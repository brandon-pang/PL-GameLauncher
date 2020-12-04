import React, { useState } from 'react';
import { StartHeader, MainLogo, StartTitle } from '../styles/styles'
import TeraLogo from '../resources/images/img_launcher_tera_logo.png';

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
            <MainLogo src={TeraLogo} />
            {titleShow(isBtnStart)}
        </StartHeader>
    )
}

export default Connect;
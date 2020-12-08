import React, { useState } from 'react';
import TeraLogo from '../../resources/images/img_launcher_tera_logo.png';
import DefaultIdImg from '../../resources/images/default-pic.png';
import LightTxtImg from '../../resources/images/bg_launcher_txt_focus.png';
import IconTxtFocusImg from '../../resources/images/icon_launcher_txt_focus.png';
import XBtnImg from '../../resources/images/btn_shortcut_x.png';
import { MainNav, SmallLogo, LoginCont, MenuCont, HoverBgCont, PlayBtnCont } from '../../styles/styles'
import ChgSnd from '../../resources/sounds/UI_Button_Fiqurechange.wav';
import StartSnd from '../../resources/sounds/UI_Button_GameStart.wav';

const ChangeSound = () => {
    return (
        <audio autoPlay>
            <source src={ChgSnd} type="audio/wav" />
        </audio>
    )
}
const StartSound = () => {
    return (
        <audio autoPlay>
            <source src={StartSnd} type="audio/wav" />
        </audio>
    )
}

const NavContainer = ({ onSelectMenu, isNavBtn, onClickPlay }) => {
    const [isStartPlay, setIsStartPlay] = useState(false);
    const playChg = (boo) => {
        if (boo === 'nav0') {
            return (
                <>
                    <ChangeSound />
                    <img className="hoverIcon" src={IconTxtFocusImg} alt="" />
                    <p className="menuTxt0">Play</p>
                </>
            )
        } else {
            return (<p className="menuTxt1">Play</p>)
        }
    }
    const tosChg = (boo) => {
        if (boo === 'nav1') {
            return (
                <>
                    <ChangeSound />
                    <img className="hoverIcon" src={IconTxtFocusImg} alt="" />
                    <p className="menuTxt0">Terms of Service</p>
                </>
            )
        } else {
            return (<p className="menuTxt1">Terms of Service</p>)
        }
    }
    const handleStartClick = () => {
        setTimeout(() => { onClickPlay(true) }, 1000);
        setIsStartPlay(true)
    }

    return (
        <MainNav>
            <SmallLogo src={TeraLogo} alt="" />
            <LoginCont><img className="default-img" src={DefaultIdImg} alt="" /> Login Name</LoginCont>
            <MenuCont>
                <div className="textCont" onClick={() => onSelectMenu('nav0')}>
                    {playChg(isNavBtn)}
                </div>
                <div className="textCont" onClick={() => onSelectMenu('nav1')}>
                    {tosChg(isNavBtn)}
                </div>
                <HoverBgCont posVal={isNavBtn}>
                    <img className="bgLeft" src={LightTxtImg} alt="" />
                </HoverBgCont>
            </MenuCont>
            {isStartPlay && <StartSound />}
            {isNavBtn === 'nav0' && <PlayBtnCont onClick={handleStartClick}><img src={XBtnImg} alt="" />Play</PlayBtnCont>}
        </MainNav>
    )
}
export default NavContainer;
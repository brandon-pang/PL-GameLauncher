import React from 'react';
import TeraLogo from '../../resources/images/img_launcher_tera_logo.png';
import DefaultIdImg from '../../resources/images/default-pic.png';
import LightTxtImg from '../../resources/images/bg_launcher_txt_focus.png';
import IconTxtFocusImg from '../../resources/images/icon_launcher_txt_focus.png';
import XBtnImg from '../../resources/images/btn_shortcut_x.png';
import { MainNav, SmallLogo, LoginCont, MenuCont, HoverBgCont, PlayBtnCont } from '../../styles/styles'

const NavContainer = ({ onSelectMenu, isNavBtn }) => {
    const playChg = (boo) => {
        if (boo === 'nav0') {
            return (
                <>
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
                    <img className="hoverIcon" src={IconTxtFocusImg} alt="" />
                    <p className="menuTxt0">Terms of Service</p>
                </>
            )
        } else {
            return (<p className="menuTxt1">Terms of Service</p>)
        }
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
            {isNavBtn === 'nav0' && <PlayBtnCont><img src={XBtnImg} />Play</PlayBtnCont>}
        </MainNav>
    )
}
export default NavContainer;
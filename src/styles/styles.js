
import styled, { createGlobalStyle } from 'styled-components';
import { ObjectFitMixIn, FlexStyle, TextStyle } from '../styles/mixin';
import AstomFont from '../resources/fonts/ASTOM.TTF';
import RobotoLightFont from '../resources/fonts/ROBOTO-LIGHT.TTF';
import RobotoMediumFont from '../resources/fonts/ROBOTO-MEDIUM.TTF';
import RobotoRegularFont from '../resources/fonts/ROBOTO-REGULAR.TTF';
import IconXcut from '../resources/images/btn_shortcut_x.png';
import LoginBgImg from '../resources/images/bg_launcher_login_id.png';
import MenuBgImg from '../resources/images/bg_launcher_menu.png';
import contLightImg from '../resources/images/bg_launcher_con_light.png';
import contLightLineImg from '../resources/images/bg_launcher_con_light_line.png';
import bgScrollImg from '../resources/images/line_launcher_con_scroll.png';
import btnRtbImg from '../resources/images/btn_shortcut_r_tb.png';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
    font-family: 'Astom';
    src: url(${AstomFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
}
@font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoLightFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
}
@font-face {
    font-family: 'RobotoMedium';
    src: url(${RobotoMediumFont}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}
@font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegularFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

body {
    margin: 0;
    padding: 0;
    height:100%;
    font-family: Astom;
    background: #000;
}
`;

/* */
export const LobbyMainStyle = styled.main`
    overflow: hidden;
    position: relative;
    height: 100vh;
    width:100vw;
    ${FlexStyle('center', 'space-between')}
`;
/* */
export const VideoClass = styled.video`
    ${ObjectFitMixIn};
`;

/* styled */
export const StartHeader = styled.header`
    position: relative;
    height: 100vh;
    flex-direction: column;
    ${FlexStyle('center', 'center')}
`;

export const MainLogo = styled.img`
    position: relative;
    top:-60px;
    max-width: 100%;
    height: auto;
`;

export const StartTitle = styled.div`
    cursor: pointer;
    position: relative;
    top:-120px;
    height:30px;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    letter-spacing: 2px;
    ${TextStyle('white', 'Astom', '35px', '')}
    ${FlexStyle('center', 'center')}
    .button-icon{
        padding:10px;
        display: block;
        background-image: url(${IconXcut});
        background-size: cover;
        background-repeat: no-repeat;
        width:26px;
        height:26px;
    }
`;
// Nav Container
export const MainNav = styled.nav`
    position: relative;
    padding-left:6%;
    padding-top:10%;
    width:40%;
    height:100%;
    background-image: url(${MenuBgImg});
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
    ${FlexStyle('flex-start', 'flex-start')}
`;
export const SmallLogo = styled.img`
    top:10px;
    left:-50px;
    position: relative;
    width:100%;
    max-width:400px;
    height:auto;
`;
export const LoginCont = styled.div`
    margin-bottom: 30px;
    width:100%;
    max-width:300px;
    height:40px;
    background-image: url(${LoginBgImg});
    background-size: cover;
    background-repeat: no-repeat;
    text-shadow: 2px 2px 5px #000;
    ${FlexStyle('center', 'flex-start')}
    ${TextStyle('white', 'RobotoRegular', '14px', '')}
    .default-img{
        padding-left:10px;
        padding-right:10px;
        width:100%;
        max-width:20px;
        height:auto;
    }
`;
export const MenuCont = styled.div`
    position:relative;
    width:100%;
    flex-direction: column;
    ${FlexStyle('flex-start', 'center')}
    .textCont{
        cursor: pointer;
        z-index: 10;
        position:relative;
        ${FlexStyle('center', 'flex-start')}
        .hoverIcon{
            position: relative;
            top:-5px;
            padding-right:2px;
            width:100%;
            max-width:50px;
            height:auto;
        }
        .menuTxt0{
            ${TextStyle('white', 'Astom', '32px', '300')}
        }
        .menuTxt1{
            margin-top:20px;
            margin-bottom:20px;
            margin-left:20px;
            ${TextStyle('white', 'Astom', '20px', '300')}
        }
    }
`;

export const HoverBgCont = styled.div`
    z-index: 5;
    position: absolute;
    height:111px;
    ${props => props.posVal === 'nav0' ? `
        width:100%;
        height:111px;
        top:-22px;
        left:-450px;
    ` : `
        width:150%;
        height:140px;
        top:26px;
        left:-540px;
    `}
    
    .bgLeft{
        height:inherit;
    }
`;
export const PlayBtnCont = styled.div`
    cursor: pointer;
    position: absolute;
    bottom:150px;
    ${FlexStyle('center', 'center')}
    ${TextStyle('#ccc', 'RobotoRegular', '18px', 'thin')}
`;

/* News Containers */
export const NewsCont = styled.section`
    position: relative;
    padding-right:6%;
    padding-top:18%;
    width:60%;
    max-width: 800px;
    height:100%;
    flex-direction: column;
    ${FlexStyle('flex-start', 'flex-start')}
`;
export const NewsBoxTop = styled.div`
    position: absolute;
    width:100%;
    height:20px;
    background-image: url(${contLightImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom left;
`;
export const NewBoxCont = styled.div`
    position: relative;
    top:16px;
    width:100%;
    
    box-shadow: 1px 1px 10px #111;
    border-right:1px solid #343b3f;
    border-bottom:1px solid #343b3f;
    background-image: url(${contLightLineImg});
    background-color: #111619;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top left;
`;
export const SliderImgCont = styled.div`
    margin:20px;
    height:381px;
    border:1px solid #999;
    .imgCont{
        width:100%;
        max-width:100%;
        height:auto;
    }
`;
export const SliderHeader = styled.div`
    margin-left:20px;
    line-height: 30px;
    ${TextStyle('white', 'RobotoMedium', '28px', '400')}
`;
export const SliderContent = styled.p`
    height:90px;
    margin:20px;
    line-height: 28px;
    text-align: justify;
    ${TextStyle('#ccc', 'RobotoRegular', '16px', 'thin')}
`;
export const NewsBottomCont = styled.div`
    position: relative;
    height: 80px;
    ${FlexStyle('center', 'center')}
`;
export const PageNation = styled.div`
    position: relative;
    list-style: none;
    ${FlexStyle('center', 'center')}
    li{
        cursor: pointer;
        margin:5px;
    }
`;
export const PageDot = styled.img`
    ${props => props.selected ? `
        filter: opacity(1);
    ` : `
        filter: opacity(0.4);
    `}
`;
export const ReadMoreCont = styled.div`
    cursor: pointer;
    position: absolute;
    right:30px;
    ${FlexStyle('center', 'center')}
    ${TextStyle('#ccc', 'RobotoRegular', '18px', 'thin')}
`;

/* TOS */
export const TosCont = styled.section`
    position: relative;
    padding-right:6%;
    padding-top:18%;
    width:60%;
    max-width: 800px;
    height:100%;
    flex-direction: column;
    ${FlexStyle('flex-start', 'flex-start')}
`;

export const TosBoxTop = styled.div`
    position: absolute;
    width:100%;
    height:20px;
    background-image: url(${contLightImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom left;
`;

export const TosBoxCont = styled.div`
    position: relative;
    top:16px;
    width:100%;
    box-shadow: 1px 1px 10px #111;
    border-right:1px solid #343b3f;
    border-bottom:1px solid #343b3f;
    background-image: url(${contLightLineImg});
    background-color: #111619;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top left;
`;

export const TosContentCont = styled.div`
    margin:20px;
    height:620px;
    border:1px solid #999;
    .tosTxt{
        top:10px;
        z-index:10;
        position: relative;
        overflow-y: scroll;
        /* width */
        ::-webkit-scrollbar {
            width: 58px;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background-image: url(${btnRtbImg});
            background-size: 58px 58px;
            background-repeat: no-repeat;
        }
        height: 600px;
        padding-left:14px;
        h1{
            ${TextStyle('white', 'RobotoMedium', '32px', '400')}
        }
        h6{
            padding-top:10px;
            padding-bottom:10px;
            ${TextStyle('white', 'RobotoRegular', '22px', '400')}
        }
        p{  
            padding-top:10px;
            padding-bottom:10px;
            line-height: 20px;
            ${TextStyle('white', 'RobotoLight', '14px', '400')}
        }
    }
    .scrollBg{
        z-index:5;
        position: absolute;
        top:34px;
        right:48px;
        width:4px;
        height:90%;
        background-image: url(${bgScrollImg});
        background-size: 4px 100px;
    }
`;
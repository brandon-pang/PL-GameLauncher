import React, { useRef, useState } from 'react';
import { VideoClass } from '../styles/styles';
import BgMovie from '../resources/videos/BG.webm';
import BgSound from '../resources/sounds/BGM_Launcher.wav';
import ChgSnd from '../resources/sounds/UI_Button_Fiqurechange.wav';
import SelectSnd from '../resources/sounds/UI_Button_Select.wav';
import StartSnd from '../resources/sounds/UI_Button_GameStart.wav';
import Connect from './Connect';
import NavContainer from './containers/NavContainer';
import NewsContainer from './containers/NewsContainer';
import TermOfService from './containers/TermOfService';
import { LobbyMainStyle } from '../styles/styles'
import MaskupImg from '../resources/banner/maskup.jpg';
import ServMovInfoImg from '../resources/banner/service_moving_info.jpg';

const newsContentArr = [
    {
        id: 0,
        img: MaskupImg,
        title: `Get Ready to Mask Up!`,
        body: `From Tuesday, August 11 until Tuesday, September 30, please join us in supporting
    Heart to Heart International’s humanitarian efforts fighting COVID-19 by purchasing
    a Concerned Caregiver Bundle in the TERA Store. Proceeds from these items help
    deliver much-needed supplies around the world.`,
    },
    {
        id: 1,
        img: ServMovInfoImg,
        title: `TERA Service Moving Info`,
        body: `As we first stated on social media on August 17, it is with a heavy heart
        that we announce that En Masse Entertainment is closing down. As of September
        14 we have discontinued cash sales of EMP and Elite Status. KRAFTON Console
        Dept. will be taking over services. Push the "Read More" button to open the
        TERA Service Moving Info article and see the latest information available about
        the transition.`,
    }
];

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
const SelectSound = () => {
    return (
        <audio autoPlay>
            <source src={SelectSnd} type="audio/wav" />
        </audio>
    )
}

const MainContainer = ({ clickedPlayBtn }) => {
    const [isNavBtn, setIsNavBtn] = useState('nav0');
    const [isReadClick, setIsReadClick] = useState(false);
    const [isNavClick, setIsNavClick] = useState(false);
    const [isSliderClick, setIsSliderClick] = useState(false);
    const [sliderNo, setSliderNo] = useState(0);
    const [isStartPlay, setIsStartPlay] = useState(false);
    const handlePrev = (e) => {
        e.preventDefault();
        if (sliderNo > 0) {
            setSliderNo(sliderNo - 1);
            setIsSliderClick(true);
            setTimeout(() => { setIsSliderClick(false); }, 500);
        } else {
            setSliderNo(0);
        }
    }
    const handleNext = (e) => {
        e.preventDefault();
        if (sliderNo < newsContentArr.length - 1) {
            setSliderNo(sliderNo + 1);
            setIsSliderClick(true);
            setTimeout(() => { setIsSliderClick(false); }, 500);
        } else {
            setSliderNo(newsContentArr.length - 1);
        }
    }
    const handleIsReadClick = (e) => {
        e.preventDefault();
        setIsReadClick(true);
        setTimeout(() => { setIsReadClick(false); }, 500);
    }
    const handleStartClick = (e) => {
        e.preventDefault();
        setTimeout(() => { clickedPlayBtn(true) }, 1000);
        setIsStartPlay(true)
    }
    const onSelectMenu = (boo) => {
        setIsNavBtn(boo)
        setIsNavClick(true);
        setTimeout(() => { setIsNavClick(false); }, 500);
    }
    const containerSelect = (boo) => {
        if (boo === '') return;
        if (boo === 'nav0') {
            return (<NewsContainer
                newsContentArr={newsContentArr}
                sliderNo={sliderNo}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleIsReadClick={handleIsReadClick} />)
        }
        if (boo === 'nav1') {
            return (<TermOfService />)
        }
    }
    return (
        <LobbyMainStyle>
            {isNavClick && <ChangeSound />}
            {isSliderClick && <ChangeSound />}
            {isReadClick && <SelectSound />}
            {isStartPlay && <StartSound />}
            <NavContainer onSelectMenu={onSelectMenu}
                isNavBtn={isNavBtn}
                handleStartClick={handleStartClick}
            />
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
                {isConnected ? <Connect connectShow={connectShow} /> : <MainContainer clickedPlayBtn={onClickPlay} />}
            </>)
        }
    }
    return (
        <>
            {playContControl(isPlay)}
        </>
    )
}
export default Lobby;

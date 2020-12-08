import React, { useState } from 'react';
import MaskupImg from '../../resources/banner/maskup.jpg';
import ServMovInfoImg from '../../resources/banner/service_moving_info.jpg';
import dotImg from '../../resources/images/img_launcher_dot.png';
import L1BtnImg from '../../resources/images/L1.png';
import R1BtnImg from '../../resources/images/R1.png';
import OBtnImg from '../../resources/images/btn_shortcut_o.png';
import ChgSnd from '../../resources/sounds/UI_Button_Fiqurechange.wav';
import SelectSnd from '../../resources/sounds/UI_Button_Select.wav';

import {
    NewsCont, NewsBoxTop, NewBoxCont, SliderImgCont,
    SliderHeader, SliderContent, NewsBottomCont, PageNation,
    PageDot, ReadMoreCont
} from '../../styles/styles'

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

const ChangeSound = () => {
    return (
        <audio autoPlay>
            <source src={ChgSnd} type="audio/wav" />
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

const NewsContainer = () => {
    const [sliderNo, setSliderNo] = useState(0);
    const [isReadClick, setIsReadClick] = useState(false);
    const [isSliderClick, setIsSliderClick] = useState(false);
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
    return (
        <NewsCont>
            {isSliderClick && <ChangeSound />}
            {isReadClick && <SelectSound />}
            <NewsBoxTop />
            <NewBoxCont>
                <SliderImgCont><img className="imgCont" src={newsContentArr[sliderNo].img} alt="" /></SliderImgCont>
                <SliderHeader>{newsContentArr[sliderNo].title}</SliderHeader>
                <SliderContent>{newsContentArr[sliderNo].body}</SliderContent>
                <NewsBottomCont>
                    <PageNation>
                        <li onClick={handlePrev}><img src={L1BtnImg} alt="" /></li>
                        <li><PageDot src={dotImg} alt="dot img" selected={sliderNo === 0} /></li>
                        <li><PageDot src={dotImg} alt="dot img" selected={sliderNo === 1} /></li>
                        <li onClick={handleNext}><img src={R1BtnImg} alt="" /></li>
                    </PageNation>
                    <ReadMoreCont onClick={handleIsReadClick}><img src={OBtnImg} alt="" />Read More</ReadMoreCont>
                </NewsBottomCont>
            </NewBoxCont>
        </NewsCont>
    )
}
export default NewsContainer;
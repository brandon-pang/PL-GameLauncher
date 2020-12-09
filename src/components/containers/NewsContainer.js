import React from 'react';
import dotImg from '../../resources/images/img_launcher_dot.png';
import L1BtnImg from '../../resources/images/L1.png';
import R1BtnImg from '../../resources/images/R1.png';
import OBtnImg from '../../resources/images/btn_shortcut_o.png';
import {
    NewsCont, NewsBoxTop, NewBoxCont, SliderImgCont,
    SliderHeader, SliderContent, NewsBottomCont, PageNation,
    PageDot, ReadMoreCont
} from '../../styles/styles'

const NewsContainer = ({ sliderNo, handlePrev, handleNext, handleIsReadClick, newsContentArr }) => {
    return (
        <NewsCont>
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
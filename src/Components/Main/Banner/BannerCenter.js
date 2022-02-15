import React from 'react';
import LetterAnimated from "./LetterAnimated";

const BannerCenter = ({title, playMarquee}) => {
    return (
        <div className={"banner-row marquee animate"}>
            <div className='marquee__inner'>
                <LetterAnimated title={title} disable/>
                <LetterAnimated title={title} disable/>
                <LetterAnimated title={title} disable/>
                <LetterAnimated title={title} disable/>
            </div>
            
        </div>
    );
};

export default BannerCenter;

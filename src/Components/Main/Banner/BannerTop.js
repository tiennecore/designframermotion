import React from 'react';
import LetterAnimated from "./LetterAnimated";

const BannerTop = ({title}) => {
    return (
        <div className={"banner-row"}>
            <div className="row-col">
                <LetterAnimated title={title}/>
            </div>
        </div>
    );
};

export default BannerTop;

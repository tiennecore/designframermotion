import {useState} from 'react';
import BannerTop from "./BannerTop";

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);



    return (
        <div className="banner">
            <BannerTop title={"New"}/>
        </div>
    );
};

export default Banner;

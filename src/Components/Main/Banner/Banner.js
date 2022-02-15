import BannerTop from "./BannerTop";
import BannerCenter from "./BannerCenter";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const Banner = () => {

    return (
        <motion.div  layout className="banner" variant={banner}>
            <BannerTop title={"New"}/>
            <BannerCenter title={"experience"}/>
        </motion.div>
    );
};

export default Banner;

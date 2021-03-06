import {motion} from "framer-motion";
import Images from "./Images";
//Variants
const container = {
    show:{
        transition:{
            staggerChildren:.5,
        }
    }
}
const Loader = ({setLoading}) => {

    return (
        <div className="loader">
            <motion.div
                layout
                className="loader-inner"
                variants={container}
                initial='hidden'
                animate='show'
                exit='exit'
                onAnimationComplete={()=> setLoading(false)}
            >
                <Images/>
            </motion.div>
        </div>
    );
};

export default Loader;

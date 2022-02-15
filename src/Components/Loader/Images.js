import {motion} from "framer-motion";
import Links from "./Links";

//variant
const item = {
    hidden:{
        opacity:0,
        y:-200,
    },
    show: {
        opacity: 1,
        y:0,
        transition: {
            ease:"easeInOut",
            duration: 1.3,
        }
    },
    exit:{
        opacity:0,
        y:200,
        transition:{
            ease: "easeInOut",
            duration:.8
        }
    },
}

function Images() {
    return (
        Links.map((image,index) => {
            if(index+1 <=6 ){
                return <motion.div
                    layout
                    key={index}
                    className={`image-box image-${index}`}
                    variants={item}
                >
                    <img key={index} src={image.url} alt=""/>
                </motion.div>
            }else{
                return <div key={index}></div>
            }
        })
    )
}

export default Images;

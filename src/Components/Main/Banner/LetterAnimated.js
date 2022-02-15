import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};
const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};
const LetterAnimated = ({title, disable}) => {
    return (
        <motion.span
            layout
            variants={banner}
            initial='initial'
            animate='animate'
            className='row-title'
        >
            {[...title].map((letter,key)=>(
                <motion.span
                    layout
                    key={key}
                    className='row-letter'
                    variants={letterAni}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default LetterAnimated;

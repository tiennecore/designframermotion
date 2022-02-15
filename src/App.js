import './sass/index.scss';
import {useEffect, useState} from "react";
import Loader from "./Components/Loader/Loader";
import {AnimatePresence, motion} from "framer-motion";
import Main from "./Components/Main/Main";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <AnimatePresence>{loading?
            <motion.div layout key="loader">
                <Loader setLoading={setLoading}/>
            </motion.div> :
            <Main/>}
        </AnimatePresence>
    );
}

export default App;

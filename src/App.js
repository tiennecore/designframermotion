import './sass/index.scss';
import {useEffect, useState} from "react";
import Loader from "./Components/Loader/Loader";
import {AnimatePresence,motion} from "framer-motion";
import Banner from "./Components/Main/Banner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
        ? document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>{loading?
          <motion.div key="loader">
            <Loader setLoading={setLoading}/>
          </motion.div> :
          <Banner/>}
    </AnimatePresence>
  );
}

export default App;

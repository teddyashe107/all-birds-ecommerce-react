import { useState } from "react";
import FloatButton from "../components/Buttons/FloatButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBar from "../components/TopBar";


const Main = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const toggleNav = () => {
        setToggle(!toggle)
    }
    
    return (
        <div className={`max-h-screen ${toggle ? "overflow-hidden": "overflow-auto"}`}>
          <TopBar />
          <Header toggleNav={toggleNav} toggle={toggle} />
          {children}
          <Footer />
          <FloatButton />
        </div>
    )
}


export default Main;
import Navbarr from "./Navbarr/Navbarr.jsx";

import "./App.css";
import Footer from "./Footer/Footer";
import Luckball from "./Luckball/Luckball.jsx";
import About from "./About/About.jsx";
import Card from "./Luckbaalcard/Luckballcard.jsx";
import Seperator from "./seperator/Seperator.jsx";
import Learn from "./learn/Learn.jsx";
import Ourmisssion from "./Ourmission/Ourmission.jsx";
import Acedmy from "./Acedmy/Acedmy.jsx";
import Coch from "./Cochsection/Coch/Coch.jsx";

function App() {
  return (
    <>
      {/* <Coch/> */}
      <Navbarr />
      <About />
      <Learn />
      <Luckball />
      <Card />

      <Ourmisssion />
      <Acedmy />
      <Footer />
    </>
  );
}

export default App;

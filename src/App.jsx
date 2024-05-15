import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Rank from "./sections/Rank";
import Video from "./sections/Video";
import Scholarship from "./sections/Scholarship";
import Programme from "./sections/Programme";
import BSchool from "./sections/BSchool";
import Testimontials from "./sections/Testimontials";
import CampusLife from "./sections/CampusLife";
import Blog from "./sections/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rank />
      <Video />
      <Scholarship />
      <Programme />
      <BSchool />
      <Testimontials />
      <CampusLife />
      <Blog />
    </>
  );
};

export default App;

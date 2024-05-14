import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Rank from "./sections/Rank";
import Video from "./sections/Video";
import Scholarship from "./sections/Scholarship";
import Programme from "./sections/Programme";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rank />
      <Video />
      <Scholarship />
      <Programme />
    </>
  );
};

export default App;

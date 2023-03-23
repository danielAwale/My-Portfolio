import "./App.css";

//import components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="text-white bg-slate-800">
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;

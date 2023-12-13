import './App.css';
import Navbar from './Components/Navbar';
import HSection from './Components/HSection';
import Skills from './Skills';
import Footer from './Footer';
import Education from './Components/Education';
import Experience from './Experience';
import Project from './Project';

function App() {
  return (
    <>
   <Navbar/>
   <HSection/>
   <Experience></Experience>
   <Skills></Skills>
   <Education></Education>
   <Project></Project>
   <Footer></Footer>
    </>
  );
}

export default App;

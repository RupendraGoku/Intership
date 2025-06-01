import { useState, useEffect } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import Second from './components/Second';
import { ArrowUp } from "lucide-react";
import Third from './components/Third';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import InsightSection from './components/InsightSection';


function App() {

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section");
      if (!secondSection) return;

      const secondSectionTop = secondSection.getBoundingClientRect().top;

      setShowTopButton(secondSectionTop < window.innerHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <div  id="main-container" className="main-container"  >
     <TopHeader/>
     <Navbar/>
     <TopSection/>
     <Second/>
     <div>
      {showTopButton && (
        <a href="#main-container">
          <button className='top-button'>
            <ArrowUp size={34} />
          </button>
        </a>
      )}
     </div>
      <Third/>
      <InsightSection/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default App

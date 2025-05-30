import './App.css'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection'
import Second from './components/Second'
import { ArrowUp } from "lucide-react";
import Third from './components/Third'
import Bottom from './components/Bottom'
import Footer from './components/Footer'


function App() {
 
  return (
    <div  id="main-container" className="main-container"  >
     <TopHeader/>
     <Navbar/>
     <TopSection/>
     <Second/>
     <div>
      <a href="#main-container">
        <button className='top-button' >
          <ArrowUp size={34}/>
        </button>
      </a>
     </div>
      <Third/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default App

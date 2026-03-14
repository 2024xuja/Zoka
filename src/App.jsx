import Choose from "./components/Choose"
import Happens from "./components/Happens"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Slayder from "./components/Slayder"

function App() {
  return (
    <>
      <Navbar /> 
      <HeroSection/>
      <Happens />
      <Choose /> 
      <Projects />
      <Slayder/>
    </>
  )
}

export default App

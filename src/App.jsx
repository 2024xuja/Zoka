import Choose from "./components/Choose"
import Happens from "./components/Happens"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Navbar /> 
      <HeroSection/>
      <Happens />
      <Choose /> 
      <Projects />
    </>
  )
}

export default App


import './App.css'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import TechStack from './components/techstack/TechStack'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </>
  )
}

export default App

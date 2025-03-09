import { ConsoleMessage } from './components/ConsoleMessage'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import MyWork from './components/MyWork'
import Domains from './components/Domains'
import Medium from './components/Medium'
import Contact from './components/Contact'

console.log('Ne kadar da meraklısın, tanışalım mı? >> me@haktantekin.com');

export default function Home() {
  return (
    <div className="flex flex-col">
      <ConsoleMessage />
      <Hero />
      <About />
      <Education />
      <Skills />
      <MyWork />
      <Domains />
      <Medium />
      <Contact />
    </div>
  )
}

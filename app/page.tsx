import Hero from './ui/hero'
import AboutMe from './ui/aboutMe'
import Projects from './ui/projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-24">
      <Hero />
      <br />
      <AboutMe />
      <br /> 
      <Projects />
      <br />
    </main>
  )
}

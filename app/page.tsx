import Hero from "./ui/hero";
import AboutMe from "./ui/aboutMe";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full p-2 lg:p-24 bg-gray-800">
      <Hero />
      <br />
      <AboutMe />
      <br />
      <Projects />
      <br />
    </main>
  );
}

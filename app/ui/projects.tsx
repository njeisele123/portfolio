import { projectCard } from "@/components/component/project-card";

export default function Projects() {
  const cards: CardInfo[] = [
    {
      title: "Image Filtering",
      link: "/imageFiltering",
      img: "/fish.jpg",
    },
    {
      title: "Synthesizer",
      link: "/synthesizer",
      img: "/synth.jpg",
    },
    {
      title: "Code Editor",
      link: "/editor",
      img: "/code.png",
    },
    {
      title: "Online Chess",
      link: "/chess",
      img: "/chess.jpg",
    },
    {
      title: "Algorithm Visualizer",
      link: "/algorithms",
      img: "/visualizer.png",
    },
    {
      title: "Finance Dashboard",
      link: "/finance",
      img: "/finance.png",
    },
    {
      title: "Smurf Village",
      link: "/smurfVillage",
      img: "/smurfs.jpg",
    },
  ];

  // TODO: make this flex on mobile
  return (
    <section className="w-full py-12 md:py-24 lg:py-10 rounded-md p-4	flex flex-col items-center justify-center ">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <h1 className="text-2xl font-bold tracking-tight text-center">
          Projects
        </h1>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10 lg:gap-10 xl:gap-10 items-start">
          {cards.map((c) => projectCard(c))}
        </div>
      </div>
    </section>
  );
}

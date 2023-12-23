import { projectCard } from '@/components/component/project-card';

export default function Projects() {

    const cards: CardInfo[] = [
        {
            title: 'Image Filtering',
            link: '/imageFiltering',
            img: '/fish.jpg'
        },
        {
            title: 'Synthesizer',
            link: '/synthesizer',
            img: '/synth.jpg'
        },
        {
            title: 'Code Editor',
            link: '/editor',
            img: '/code.png'
        },
        {
            title: 'Online Chess',
            link: '/chess',
            img: '/chess.jpg'
        },
        {
            title: 'Algorithm Visualizer',
            link: '/algorithms',
            img: '/visualizer.png'
        },
        // TODO: I think mock youtube would be more interesting than this
        {
            title: 'Web Forum',
            link: '/forum',
            img: '/lamp.jpg'
        }
    ]

    // TODO: make this flex on mobile
    return (
        <section className="w-full py-12">
            <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
                <h1 className="text-2xl font-bold tracking-tight text-center">Projects</h1>
                <div className="grid md:grid-cols-3 gap-x-4 gap-y-0 lg:gap-6 xl:gap-8 items-start">
                    {cards.map(c => projectCard(c))}
                </div>
            </div>
        </section>
    )
}

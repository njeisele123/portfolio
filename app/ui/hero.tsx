import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full py-24 bg-[#f9fafb] dark:bg-[#1f2937]">
      <div className="container mx-auto px-1 md:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[3fr,2fr] gap-2 lg:gap-2 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
              Nick Eisele
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400">
              Full stack developer
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 text-white px-8 text-sm font-medium shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 disabled:pointer-events-none disabled:opacity-50"
                href="Resume.pdf"
                download={'njeisele-resume.pdf'}
                target='_blank'
              >
                View Resume
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 disabled:pointer-events-none disabled:opacity-50"
                href="mailto:nickolas_eisele@alumni.brown.edu"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-auto">
            <Image
              className="relative"
              src="/OIP.png"
              alt="Next.js Logo"
              width={475}
              height={316}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IcC42XibUnk
 */

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-10 rounded-md p-4">
        <div className="container px-4 md:px-6 sm:px-0">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl tracking-tighter sm:text-2xl md:text-3xl lg:text-3xl/none">
                About Me
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {`Hello! I'm Nick Eisele, an SDE 2 at Amazon. Currently, I am in the High Volume Hiring org, where I build applications 
                that are used in the work force staffing process. I enjoy solving complex problems in order
                to deliver intuitive products for customers; additionally, I have experience in a number of programming languages and
                web technoloies - in particular: Java, React, and AWS. Feel free to take a look at some of my projects below. 
                `}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

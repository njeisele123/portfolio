import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        {" "}
        Image Effects{" "}
      </h1>
      <br />
      <p>
        This is a project that I (as part of a team) worked on in college. We
        built a plugin for Eclipse that allows users to have a nearly hands free
        development experience with Java. For this, we used the Google speech
        API to listen to the user talk. We also made use of some features that
        the api offered like custom configurations to detect certain phrases.
        The other significant part of the project was processing the text of the
        speech and converting that into commands. Below is a demo I made using
        the plugin to write a small program.
        <br />
        <br />
        Code:{" "}
        <InlineLink href="https://github.com/speechtocode-brown-edu/Speech-Based-Code-Editor-Project">
          https://github.com/speechtocode-brown-edu/Speech-Based-Code-Editor-Project
        </InlineLink>
      </p>
      <br />
      <iframe
        width="790"
        height="444"
        src="https://www.youtube.com/embed/fSwXV9wqL68"
        title="Speech Based Code Editor Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}

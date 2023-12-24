import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-4 lg:px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        Synthesizer
      </h1>
      <br />
      I was interested in learning about how digital audio works so I built a
      synthesizer in C#.
      <br />
      <br />
      To do this, I looked into the process of additive synthesis, which is
      where you can add different types of waves together (e.g. sine or square
      waves) to get a new wave (example below).
      <DemoImage file="/synth/1.gif" />
      This can then be sampled at a given interval to get data for a wave file.
      <br />
      <br />
      Further, I was interested in allowing the synthesizer to read and play
      music, so I looked into how sheet music files are represented. It turns
      out that a popular format is called “MusicXML”
      <DemoImage file="/synth/2.png" />
      Given that these files are not immediately readable, I wrote a music xml
      parser that processes these files into a score.
      <br />
      <br />
      Then, I wrote some code to turn these scores into notes. The end result is
      a synthesizer that can “play” music xml files (albeit at a pretty basic
      level).
      <br />
      <br />
      Code:{" "}
      <InlineLink href="https://github.com/njeisele/Synthesizer">
        https://github.com/njeisele/Synthesizer
      </InlineLink>
      <br />
      <br />
      Here is a
      <InlineLink href="https://vocaroo.com/1ladlNYn0BAE">
        {" "}
        short demo{" "}
      </InlineLink>
    </main>
  );
}

import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-4 lg:px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        Web Forum
      </h1>
      <br />I was interested in developing a project using the LAMP (Linux,
      Apache, MySQL, PHP) stack so I built a web forum. It has features
      including jwt authentication, rate limiting, replies, and likes. You can
      check it out here (note: it may not be running for cost reasons) or just
      look at some screenshots below if you’re interested.
      <br />
      <br />
      Code:{" "}
      <InlineLink href="https://github.com/njeisele/Forum">
        https://github.com/njeisele/Forum
      </InlineLink>
      <DemoImage file="/forum/1.png" size={600} />
      <DemoImage file="/forum/2.png" size={600} />
    </main>
  );
}

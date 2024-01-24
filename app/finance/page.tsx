import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-4 lg:px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        Finance Dashboard
      </h1>
      <br />I built an app in{" "}
      <InlineLink href="https://nextjs.org/">Next JS</InlineLink>
      to keep track of my personal finances. It aggregates data across different
      investment categories using a few different methods: public APIs, bank
      integrations, and headless browser automation. Using this, along with a
      PostgreSQL database, I am able to view my net worth, time series data on my
      investments, and a watch list of stocks/cryptos.
      <br />
      <br />
      Code:
      <InlineLink href="https://github.com/njeisele123/net-worth-tracker">
      https://github.com/njeisele123/net-worth-tracker
      </InlineLink>
      <br />
      <br /> Screenshots: (with demo data):
      <br />
      <br />
      <DemoImage file="/finance/1.png" size={3000} />
    </main>
  );
}

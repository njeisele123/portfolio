import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-4 lg:px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        {" "}
        Smurf village{" "}
      </h1>
      <br />
      <p>
        I made a web app where I could view information about my different
        League of Legends accounts. (Literature on why these accounts are
        referred to as Smurfs
        https://www.makeuseof.com/what-is-a-smurf-in-gaming/). To implement
        this, I used{" "}
        <InlineLink href="https://threejs.org/">Three JS </InlineLink> on the
        client side to render 3d objects. For the back-end I used a Python
        server built with
        <InlineLink href="  https://flask.palletsprojects.com/en/3.0.x/">
          Flask{" "}
        </InlineLink>{" "}
        and SQL. Additionally, to get the game data I used the Riot API.
      </p>
      <br />
      <p>
        Code:
        <InlineLink href="https://github.com/njeisele123/SmurfVillageServer">
          https://github.com/njeisele123/SmurfVillageServer
        </InlineLink>
        <InlineLink href="https://github.com/njeisele123/smurfVillageUI">
          https://github.com/njeisele123/smurfVillageUI
        </InlineLink>
      </p>
      <br />
      <p>
        First, you can put in information about which accounts to
        track.
      </p>
      <DemoImage file="/smurfVillage/accounts.png" size={800} />
      <p>
        Then you can view the Village. The color of the mushrooms correspond
        to the rank of the account.
      </p>
      <DemoImage file="/smurfVillage/village.png" size={800} />
      <p>
        Clicking on one of these, will take you inside, where you can view your
        most played character and info about your recent games.
      </p>
      <DemoImage file="/smurfVillage/house.png" size={800} />
      <DemoImage file="/smurfVillage/history.png" size={800} />
    </main>
  );
}

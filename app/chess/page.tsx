import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        Online Chess
      </h1>
      <br />
      <p>
        Here, I made an online chess game. For this, the two main pieces of
        technology I used were React and Firebase. On the React side of the
        things, I found two helpful packages: chessboard jsx and chess js.
        Chessboard jsx is helpful because it provides a UI for the chess board.
        Chess js is equally helpful because it stores a representation of the
        board and handles tracking for game data like turns, winners, possible
        moves, etc. These packages combined with some React hooks allows for a
        very elegant implementation of chess.
        <br />
        <br />
        It also has a AI mode where you can play against the computer. For this
        I used the minimax algorithm and an evaluation function based off the #
        of black vs white pieces on the board.
        <br />
        <br />
        Here is a github link to the project and here are some screen shots of
        the final implementation.
        <br />
        <br />
        (A player can go to the site and create a new game)
        <br />
        <br />
        {/* TODO: up the size of this */}
        <DemoImage file='/chess/create.png' size={600}/>
        (The game is initialized and the player can then send an invite link to a friend)
        <DemoImage file='/chess/2.png' size={600}/>
        (Player 2 can connect and the game can commence)
        <DemoImage file='/chess/3.png' size={600}/>
        (A possible outcome of the game)
        <DemoImage file='/chess/4.png' size={600}/>
      </p>
    </main>
  );
}

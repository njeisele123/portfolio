import { DemoImage } from "../ui/demoImage";
import { InlineLink } from "../ui/inlineLink";

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        {" "}
        Algorithm Visualizer{" "}
      </h1>
      <br />
      <p>
        In this project, I worked on visualizing some algorithms in a way that I
        thought would help me grasp them better and would be fun. This was done
        using Typescript/React.
        <br />
        <br />
        Code:{" "}
        <InlineLink href="https://github.com/njeisele/AlgoVisualization">
          https://github.com/njeisele/AlgoVisualization
        </InlineLink>
        <br />
        <br />
        <strong>Djikstra:</strong> Here is a visualization of Djikstra. Nodes
        are turned to green as they are visited. The current edge to consider is
        purple. The end result is that all the edges that are used for shortest
        path traversals are highlighted in blue.
      </p>
      <br />
      <iframe
        width="806"
        height="453"
        src="https://www.youtube.com/embed/Nci05cv_XW0"
        title="Djikstra Visualization"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <strong>Graham Scan:</strong> Here is a visualization of Graham scan.
      First the nodes are sorted around an anchor point. Then, the purple lines
      show the 3 nodes being considered for the convex hull.
      <br />
      <iframe
        width="806"
        height="453"
        src="https://www.youtube.com/embed/jKKxswfX9ng"
        title="Graham Scan Visualization"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <strong>Quick Sort: </strong>First, random numbers are generated. Then,
      the pivot is highlighted in green and the current section the algorithm is
      looking at is highlighted in red.
      <br />
      <iframe
        width="806"
        height="453"
        src="https://www.youtube.com/embed/glBIHjfk7R4"
        title="Quick Sort Visualization"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}

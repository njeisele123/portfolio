import Image from "next/image";
import { InlineLink } from "../ui/inlineLink";

const IMG_SIZE = 400;

const DemoImage = ({ file }: { file: string }) => {
  return (
    <Image
      src={file}
      alt=""
      width={IMG_SIZE}
      height={IMG_SIZE}
      className="py-8"
    />
  );
};

export default function Page() {
  return (
    <main className="min-h-screen py-24 px-80">
      <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-left">
        {" "}
        Image Effects{" "}
      </h1>
      <br />
      <p>
        Here, I implemented the
        <InlineLink
          href="https://en.wikipedia.org/wiki/K-means_clustering"
          text="K-Means"
        />
        algorithm and applied it to images to create some interesting effects.
        This algorithm works by determining clusters for data through an
        iterative process. In this case, the data are the pixels of the image
        and the clusters are colors. Below are some examples of these effects.
      </p>
      <br />
      <p>
        Code:
        <InlineLink
          href="https://github.com/njeisele/ImageFiltering"
          text="https://github.com/njeisele/ImageFiltering"
        />
      </p>
      <br />
      <p>
        In this instance, the algorithm found a few different clusters and
        grouped the image into them.
      </p>
      <DemoImage file="/filtering/1.jpg" />
      <p>
        Here, I did something similar but with the image scaled in black and
        white.
      </p>
      <DemoImage file="/filtering/2.jpg" />
      <DemoImage file="/filtering/3.jpg" />

      <p>
        By adding a lot of clusters (e.g. 100+), you can start to get back
        something that resembles the initial image.
      </p>
      <DemoImage file="/filtering/4.jpg" />

      <p>
        With images in gray scale, it is not too difficult to apply one color to
        the whole image.
      </p>
      <DemoImage file="/filtering/5.jpg" />

      <p>
        Edges can be extracted pretty easily between these sections. Hitting the
        original image with a blur first can be helpful to reduce ‘edginess’ of
        the result since the algorithm will divide blurred images into fewer,
        more contiguous chunks.
      </p>
      <DemoImage file="/filtering/6.jpg" />
      <DemoImage file="/filtering/7.jpg" />
      <DemoImage file="/filtering/8.jpg" />

      <p>
        This is a gif of the algorithm being performed with a greater number of
        clusters each time, allowing for greater detail. I think it looks neat.
      </p>
      <DemoImage file="/filtering/9.gif" />

      <p>More fun.</p>
      <DemoImage file="/filtering/10.gif" />
      <p>
        One of the coolest effects is achieved by shuffling the clusters so
        different parts of the image are assigned to colors that really belong
        to other parts.
      </p>
      <DemoImage file="/filtering/11.jpg" />
      <DemoImage file="/filtering/12.jpg" />
      <DemoImage file="/filtering/13.jpg" />
      <DemoImage file="/filtering/14.jpg" />
    </main>
  );
}

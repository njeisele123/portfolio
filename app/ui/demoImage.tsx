import Image from "next/image";

const IMG_SIZE = 400;

export const DemoImage = ({ file, size}: { file: string, size?: number }) => {
  return (
    <Image
      src={file}
      alt=""
      width={size ?? IMG_SIZE}
      height={size ?? IMG_SIZE}
      className="py-8"
    />
  );
};
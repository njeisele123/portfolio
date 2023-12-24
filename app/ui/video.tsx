// makes embedded youtube videos responsive
export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <iframe
      className="w-full py-2"
      height={315}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

import { useState, useEffect, useRef, FC } from "react";

type YoutubeProps = {
  videoId: string;
  videoTitle: string;
};

export const Youtube: FC<YoutubeProps> = ({ videoId, videoTitle }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const currentRef = videoRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="rounded">
      {load ? (
        <iframe
          width="340px"
          height="190px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
          loading="lazy"
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

const Placeholder: FC = () => {
  return (
    <div className="grid h-[190px] w-[340px] place-items-center rounded-2xl bg-background-light">
      <div className="grid h-[48px] w-[66px] place-items-center rounded-xl bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

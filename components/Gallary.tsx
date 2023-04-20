"use client";

import { Slide } from "react-slideshow-image";
import Image from "next/image";
import SecTitle from "./SecTitle";

import "react-slideshow-image/dist/styles.css";
import ScrollFade from "./ScrollFade";

const Gallary = () => {
  const imgItems = [
    {
      img: "/QUARTER_image11.svg",
      alt: "gallary-image",
    },
    {
      img: "/クォーター16.webp",
      alt: "gallary-image2",
    },
    {
      img: "/クォーター4.webp",
      alt: "gallary-image4",
    },
    {
      img: "/QUARTER_image9.jpg",
      alt: "gallary-image5",
    },
    {
      img: "/QUARTER_image15.jpg",
      alt: "gallary-image6",
    },
    {
      img: "/QUARTER_image10.jpg",
      alt: "gallary-image7",
    },
  ];

  return (
    <ScrollFade>
      <section className="mx-auto max-w-screen-xl px-3 py-20 lg:px-0 ">
        <div className="gap-8 text-center lg:grid">
          <SecTitle>ギャラリー</SecTitle>

          {/* PC */}
          <div className="hidden grid-cols-3 gap-14 lg:grid ">
            {imgItems.map((item) => (
              <Image
                key={item.alt}
                src={item.img}
                alt={item.alt}
                width={500}
                height={300}
                className="  aspect-video h-72  w-full  object-cover"
              />
            ))}
          </div>
          {/* SP */}
          <div className=" lg:hidden ">
            <Slide slidesToShow={1} indicators={true}>
              {imgItems.map((item) => (
                <div
                  key={item.alt}
                  className="flex h-[400px] items-center justify-center "
                >
                  <Image
                    key={item.alt}
                    src={item.img}
                    alt={item.alt}
                    width={500}
                    height={300}
                    className=" aspect-video h-72 w-full object-cover "
                  />
                </div>
              ))}  
            </Slide>
          </div>
        </div>
      </section>
    </ScrollFade>
  );
};

export default Gallary;

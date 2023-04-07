"use client";

import { Slide } from "react-slideshow-image";
import Image from "next/image";
import SecTitle from "./SecTitle";

import "react-slideshow-image/dist/styles.css";

const Gallary = () => {
  const imgItems = [
    {
      img: "/QUARTER_image11.jpg",
      alt: "hero-image",
    },
    {
      img: "/hero-image.svg",
      alt: "hero-image2",
    },
    {
      img: "/hero-image.svg",
      alt: "hero-image4",
    },
    {
      img: "/hero-image.svg",
      alt: "hero-image5",
    },
    {
      img: "/hero-image.svg",
      alt: "hero-image6",
    },
    {
      img: "/hero-image.svg",
      alt: "hero-image7",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-3 py-14 lg:px-0 ">
      <SecTitle>ギャラリー</SecTitle>

      <div className="mt-10 ">
        {/* PC */}
        <div className="hidden grid-cols-3 gap-14 lg:grid ">
          {imgItems.map((item) => (
            <Image
              key={item.alt}
              src={item.img}
              alt={item.alt}
              width={500}
              height={300}
              className=" w-full object-cover"
            />
          ))}
        </div>
        {/* SP */}
        <div className=" lg:hidden">
          <Slide slidesToShow={1} indicators={true}>
            {imgItems.map((item) => (
              <div
                key={item.alt}
                className="item-center flex h-[400px] justify-center "
              >
                <Image
                  key={item.alt}
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className=" w-full object-cover "
                />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Gallary;

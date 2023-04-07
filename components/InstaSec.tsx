import Image from "next/image";
import SecTitle from "./SecTitle";
import Link from "next/link";

const InstaSec = () => {
  return (
    <section className=" mx-auto max-w-screen-xl px-3 py-14 lg:px-0">
      <div className="grid place-items-center gap-10">
        <SecTitle>Instagram</SecTitle>

        <Link
          href="https://www.instagram.com/barber_quarter/?hl=ja"
          className="flex items-center gap-20"
        >
          <Image
            src="/Instagram_Glyph_Gradient_RGB.svg"
            alt="insta-blog"
            width={300}
            height={300}
            className=" h-52 w-full object-cover"
          />
          <Image
            src="/QUARTER_image10.jpg"
            alt="insta-blog"
            width={300}
            height={300}
            className=" h-80 w-full object-cover"
          />
        </Link>
        <span>画像を押すとインスタグラムに飛びます。</span>
      </div>
    </section>
  );
};

export default InstaSec;

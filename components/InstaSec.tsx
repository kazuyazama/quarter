import Image from "next/image";
import SecTitle from "./SecTitle";
import Link from "next/link";
import GridWraper from "./GridWraper";

const InstaSec = () => {
  return (
    <section className=" mx-auto max-w-screen-xl px-3 py-20 lg:px-0">
      <GridWraper>
        <SecTitle>Instagram</SecTitle>

        <Link
          href="https://www.instagram.com/barber_quarter/?hl=ja"
          className="flex items-start gap-5 "
        >
          {/* <Image
            src="/Instagram_Glyph_Gradient_RGB.svg"
            alt="insta-blog"
            width={20}
            height={20}
            className=" h-20 w-20 object-cover translate-y-6 "
          /> */}
          <Image
            src="/insta.png"
            alt="insta-blog"
            width={300}
            height={300}
            className=" w-full rounded-md object-cover lg:h-80  "
          />
        </Link>
        <span>画像を押すとインスタグラムに飛びます。</span>
      </GridWraper>
    </section>
  );
};

export default InstaSec;

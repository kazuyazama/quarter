import Image from "next/image";
import SecTitle from "./SecTitle";
import Link from "next/link";

const BlogSec = () => {
  return (
    <section className=" mx-auto max-w-screen-xl py-14">
      <div className="grid place-items-center gap-10">
        <SecTitle>インスタブログ</SecTitle>

        <Link
          href="https://www.instagram.com/barber_quarter/?hl=ja"
          className="flex flex-col items-center gap-3"
        >
          <Image
            src="/Instagram_Glyph_Gradient_RGB.svg"
            alt="insta-blog"
            width={200}
            height={200}
          />
          インスタグラムに飛ぶ
        </Link>
      </div>
    </section>
  );
};

export default BlogSec;

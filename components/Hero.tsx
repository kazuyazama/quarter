import Image from "next/image";
import ScrollFade from "./ScrollFade";

const Hero = () => {
  return (
    <section>
      {/* パソコン */}

      <div className="relative hidden lg:block">
        <Image
          src="/quarter-logo.svg"
          alt="logo"
          width={400}
          height={200}
          className=" absolute inset-0 z-10 m-auto object-cover  "
        />
        <Image
          src="/hero-image.webp"
          alt="hero-image"
          width={500}
          height={300}
          className=" w-full object-cover opacity-50"
        />
      </div>

      {/* スマホ */}
      <div className="relative lg:hidden">
        <Image
          src="/quarter-logo.svg"
          alt="logo"
          width={200}
          height={200}
          className=" absolute inset-0 z-10 m-auto object-cover   "
        />
        <Image
          src="/hero-image.webp"
          alt="hero-image"
          width={400}
          height={600}
          className=" h-[450px] w-full object-cover opacity-50"
        />
      </div>
    </section>
  );
};

export default Hero;

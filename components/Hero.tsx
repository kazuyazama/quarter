import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src="/quarter-logo.svg"
        alt="logo"
        width={400}
        height={200}
        className=" object-cover absolute inset-0 m-auto  "
      />
      <Image
        src="/hero-image.svg"
        alt="hero-image"
        width={500}
        height={300}
        className=" w-full object-cover"
      />
    </section>
  );
};

export default Hero;


import AboutSec from "@/components/AboutSec";
import Hero from "@/components/Hero";
import InfoSec from "@/components/InfoSec";
import InstaSec from "@/components/InstaSec";
import MenuSec from "@/components/MenuSec";
import ReserveSec from "@/components/ReserveSec";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />

      <AboutSec />

      <MenuSec />

      <InfoSec />

      <ReserveSec />

      <InstaSec />
    </div>
  );
};

export default Home;

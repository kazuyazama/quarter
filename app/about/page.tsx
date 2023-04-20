import AboutSec from "@/components/AboutSec";
import Gallary from "@/components/Gallary";
import GridWraper from "@/components/GridWraper";
import ScrollFade from "@/components/ScrollFade";
import SecTitle from "@/components/SecTitle";
import Staffs from "@/components/Staffs";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className=" overflow-hidden">
      <PageTitle>QUARTERについて</PageTitle>
      <AboutSec pageMode />
      <ScrollFade margin="-100px">
        <section className="bg-slate px-3 py-20 lg:px-0">
          <div className=" mx-auto max-w-screen-xl">
            <GridWraper>
              <SecTitle>スタッフ紹介</SecTitle>
              <Staffs />
            </GridWraper>
          </div>
        </section>
      </ScrollFade>
      <Gallary />
    </div>
  );
};

export default About;

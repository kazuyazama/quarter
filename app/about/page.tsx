import AboutSec from "@/components/AboutSec";
import Gallary from "@/components/Gallary";
import SecTitle from "@/components/SecTitle";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";

const stylistItem = [
  {
    stylist: "kazuhisa",
    position: "スタイリスト・オーナー",
    comment:
      "ご満足いただけるように努めます。\nよろしくお願いします。\n趣味は釣りです。",
    img: "/owner.svg",
  },
  {
    stylist: "saki",
    position: "スタイリスト",
    comment:
      "笑顔でお帰り頂けますように精一杯頑張ります。\n甘いものが大好きです。",
    img: "/saki.svg",
  },
];

const About = () => {
  return (
    <div className=" overflow-hidden">
      <PageTitle>QUARTERについて</PageTitle>
      {/* <div className=" mx-auto grid gap-10 ">
        <div className=" max-w-screen-xl mx-auto py-14">
          <SecTitle>コンセプト</SecTitle>

          <p>
            お子様からお年寄りまでお越しいただけるファミリーサロンです。
            カットだけでなく、お顔剃りのみ、ヘッドスパのみでもご利用いただけます。
            お似合いのスタイルの提案だけでなく、
            ゆっくりと過ごしていただけるよう居心地の良いお店作りを心がけています。
          </p>
        </div>
      </div> */}
      <AboutSec pageMode />
      <section className="bg-slate py-14 px-3 lg:px-0">
        <div className=" mx-auto max-w-screen-xl">
          <SecTitle>スタッフ紹介</SecTitle>

          <div className=" mt-10 grid lg:grid-cols-2 gap-8">
            {stylistItem.map((item) => (
              <div
                key={item.stylist}
                className="flex items-center lg:items-start  gap-6 bg-white px-6 py-10 drop-shadow-xl "
              >
                <Image
                  src={item.img}
                  alt={item.stylist}
                  width={130}
                  height={130}
                />
                <div>
                  <dl className="mb-4 grid gap-1">
                    <dt className="text-xl font-bold">{item.stylist}</dt>
                    <dd className=" text-xs">{item.position}</dd>
                  </dl>
                  <p className=" whitespace-pre-line">{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Gallary />
    </div>
  );
};

export default About;

import Image from "next/image";
import SecTitle from "./SecTitle";
import Button from "./Button";
import Link from "next/link";
import GridWraper from "./GridWraper";

const MenuSec = () => {
  const secItems = [
    {
      title: "カット",
      img: "/QUARTER_image3.svg",
      description:
        "カット・顔剃り・シャンプーが付いたコースです。​学生のコースもございます。 ​カラーやパーマもお任せください。",
    },
    {
      title: "シェービング",
      img: "/QUARTER_image16.svg",
      description:
        "これぞサロンの醍醐味です。 眉カットもサービスしております。",
    },
    {
      title: "ヘッドスパ",
      img: "/QUARTER_image11.svg",
      description:
        "ヘッドスパは頭皮をキレイにして、さらにゆ～～～っくりとマッサージする当店自慢の人気メニューです",
    },
  ];

  return (
    <section className="bg-slate">
      <div className=" mx-auto max-w-screen-xl px-3 py-20 lg:px-0">
        <GridWraper>
          <SecTitle>メニュー</SecTitle>

          <div className="grid items-center gap-20 lg:grid-cols-3  ">
            {secItems.map((item) => (
              <Link
                key={item.title}
                href="/menu"
                className="flex h-[370px] w-[330px] flex-col items-center gap-4"
              >
                <h5 className=" text-lg font-bold">{item.title}</h5>
                <Image
                  alt={item.title}
                  src={item.img}
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-md"
                />
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
          <Button path="/menu">すべてのメニューをみる</Button>
        </GridWraper>
      </div>
    </section>
  );
};

export default MenuSec;

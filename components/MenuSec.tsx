import Image from "next/image";
import SecTitle from "./SecTitle";
import Button from "./Button";
import Link from "next/link";

const MenuSec = () => {
  const secItems = [
    {
      title: "カット",
      img: "/line-qr-code.jpg",
      description:
        "カット・顔剃り・シャンプーが付いたコースです。​学生のコースもございます。 ​カラーやパーマもお任せください。",
    },
    {
      title: "シェービング",
      img: "/line-qr-code.jpg",
      description:
        "これぞサロンの醍醐味です。 眉カットもサービスしております。",
    },
    {
      title: "ヘッドスパ",
      img: "/line-qr-code.jpg",
      description:
        "ヘッドスパは頭皮をキレイにして、さらにゆ～～～っくりとマッサージする当店自慢の人気メニューです",
    },
  ];

  return (
    <section className="bg-slate">
      <div className=" mx-auto max-w-screen-xl py-14">
        <div className="grid place-items-center gap-10">
          <SecTitle>メニュー</SecTitle>

          <div className="grid grid-cols-3 items-center gap-20 pb-10 ">
            {secItems.map((item) => (
              <Link key={item.title} href="/menu" className="flex h-[370px] w-[330px] flex-col items-center gap-4">
                <h5 className=" font-bold text-lg">{item.title}</h5>
                <Image alt={item.title} src={item.img} width={300} height={300} className="w-full object-cover" />
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
          <Button path="/menu">すべてのメニューをみる</Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSec;

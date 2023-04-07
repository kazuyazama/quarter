import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconCircleChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import Button from "./Button";
import SecTitle from "./SecTitle";

type Props = {
  pageMode?: boolean;
};

const AboutSec = ({ pageMode }: Props) => {
  return (
    <section className=" mx-auto max-w-screen-xl px-3 py-14 lg:px-0">
      <div className="grid place-items-center gap-10">
        <SecTitle>
          {pageMode ? "35年の実績" : "カットスタジオQuarter"}
        </SecTitle>

        {pageMode ? (
          <p className="text-center">
            「髪が楽にセットできる気持ちいい朝を迎えてもらいたい」
            <br />
            <br />
            「髪型を変えて新しいおしゃれを楽しんでもらいたい」
            <br />
            <br />
            「髪が増えて周りの方に若返ったと喜んでもらいたい」
            <br />
            <br />
            お客様のヘアライフが豊かになり、快適な毎日を過ごしていただけることが私たちの喜びです。
            <br />
            そのためにファッションや流行といったことから、育毛促進や脱毛予防に関する幅広い知識の提供と、
            <br />
            お仕事やファッションやライフワークを考慮したうえでのお似合いのヘアスタイル提案を行っております。
            <br />
            これからもお客様の喜ぶ姿を大切にしていきます。
          </p>
        ) : (
          <p className="text-center ">
            Quarterはお子様からお年寄りまでお越しいただけるファミリーサロンです。
            <br />
            カットだけでなく、お顔剃りのみ、ヘッドスパのみでもご利用いただけます。
            <br />
            お似合いのスタイルの提案だけでなく、ゆっくりと過ごしていただけるよう居心地の良いお店作りを心がけています。
          </p>
        )}

        {!pageMode && <Button path="/about">Quarterについて詳しくみる</Button>}
      </div>
    </section>
  );
};

export default AboutSec;

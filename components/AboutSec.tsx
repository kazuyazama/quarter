import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconCircleChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import Button from "./Button";
import SecTitle from "./SecTitle";
import GridWraper from "./GridWraper";
import ScrollFade from "./ScrollFade";

type Props = {
  pageMode?: boolean;
};

const AboutSec = ({ pageMode }: Props) => {
  return (
    <ScrollFade>
      <section className=" mx-auto my-16 max-w-screen-xl px-3 lg:px-0">
        <GridWraper>
          <SecTitle>
            {pageMode ? "35年の実績" : "カットスタジオQUARTER"}
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

          {!pageMode && (
            <Button path="/about">Quarterについて詳しくみる</Button>
          )}
        </GridWraper>
      </section>
    </ScrollFade>
  );
};

export default AboutSec;

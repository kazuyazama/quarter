import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconCircleChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import Button from "./Button";
import SecTitle from "./SecTitle";

type Props = {
  pageMode?:boolean; 
}

const AboutSec = ({ pageMode }:Props) => {
  return (
    <section className=" mx-auto max-w-screen-xl py-14 px-3 lg:px-0">
      <div className="grid place-items-center gap-10">
        <SecTitle>{pageMode ? "コンセプト" : "カットスタジオQuarter"}</SecTitle>
        <p className="text-center ">
          Quarterはお子様からお年寄りまでお越しいただけるファミリーサロンです。
          <br />
          カットだけでなく、お顔剃りのみ、ヘッドスパのみでもご利用いただけます。
          <br />
          お似合いのスタイルの提案だけでなく、ゆっくりと過ごしていただけるよう居心地の良いお店作りを心がけています。
        </p>
        {!pageMode && <Button path="/about">Quarterについて詳しくみる</Button>}
      </div>
    </section>
  );
};

export default AboutSec;

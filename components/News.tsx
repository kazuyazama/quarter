import Link from "next/link";
import GridWraper from "./GridWraper";
import ScrollFade from "./ScrollFade";
import SecTitle from "./SecTitle";

const News = () => {
  return (
    <ScrollFade>
      <section className=" mx-auto my-0 max-w-screen-xl bg-primary/20  p-3 lg:my-16 lg:px-0">
        <GridWraper className="py-4">
          <h2 className=" text-lg font-bold">お客様へお知らせ</h2>
          <p className="text-start text-sm leading-6 lg:text-center lg:text-base">
            いつも当店をご利用いただき誠にありがとうございます。
            <br />
            この度、スタッフが6〜7月から
            産休に入らせていただくこととなりました。
            <br />
            したがって、シェービング(レディースシェーブ)のご利用受付と、LINE予約をしばらく受付停止にさせていただきます。
            <br />
            電話での予約については、引き続き承りますので、ご予約の際はお電話下さい。
            <br />
            皆様にはご不便をおかけ致しますが、今後ともquarterをよろしくお願いいたします。
            <br />
            <span className="inline-block pt-2">
              ※産休、復帰の時期の詳細については後ほど
              <Link
                href="https://www.instagram.com/barber_quarter/?hl=ja"
                className="border-b-2 text-secondary"
              >
                インスタグラム
              </Link>
              を更新させていただくのでご確認をお願いいたします。
            </span>
          </p>
        </GridWraper>
      </section>
    </ScrollFade>
  );
};

export default News;

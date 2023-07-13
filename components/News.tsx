import GridWraper from "./GridWraper";
import ScrollFade from "./ScrollFade";
import SecTitle from "./SecTitle";

const News = () => {
  return (
    <ScrollFade>
      <section className=" mx-auto my-16 bg-primary/40  max-w-screen-xl p-3 lg:px-0">
        <GridWraper>
          <h2 className=" text-lg font-bold">価格改定のお知らせ</h2>
          <p className="text-center">
            いつも当店をご利用頂きありがとうございます。
            <br />
            材料費の高騰により、
            カラー、パーマ、アイロンなど特殊メニューの料金を8月1日より改定させていただきます。
            <br />
            これからもより一層お客様にしっかり向き合い丁寧に施術させていただきます。
            <br />
            何卒よろしくお願いいたします。
          </p>
        </GridWraper>
      </section>
    </ScrollFade>
  );
};

export default News;

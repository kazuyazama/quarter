import GridWraper from "./GridWraper";
import ScrollFade from "./ScrollFade";
import SecTitle from "./SecTitle";

const infoItem = [
  {
    title: "営業時間",
    description: "9:00〜19:00（最終受付カットのみ18:45、カット以外18:30）",
  },
  {
    title: "定休日",
    description:
      "毎週月曜日・第3火曜日\n※祝日が月曜日に当たる場合はその翌日が定休日になります。",
  },
  {
    title: "お問い合わせ",
    description: "TEL:044-387-1338",
  },
  {
    title: "アクセス",
    description:
      "向ヶ丘遊園駅から（徒歩3分）\n北口を出ましたら右側にバスロータリーが見えます。ロータリー横の踏切を渡って左に20m程行くと、右手にメガネ中光堂さんがあるので、その路地を入って行くと右手にございます。\n登戸駅から（徒歩8分）\n生田緑地口を降りて線路沿いを向ヶ丘遊園方面に直進\n駐車場は近隣のコインパーキングをご利用ください。",
  },
];

const InfoSec = () => {
  return (
    <ScrollFade>
      <section className=" mx-auto max-w-screen-xl px-3 py-20 lg:px-0">
        <GridWraper>
          <SecTitle>店舗情報</SecTitle>

          <div className="grid gap-20 lg:grid-cols-2 lg:gap-5 ">
            <div className=" ">
              <ul className="flex flex-col gap-6">
                {infoItem.map((item) => (
                  <li key={item.title} className=" ">
                    <dl className="flex flex-col items-start gap-2">
                      <dt className=" rounded-full bg-secondary px-5 py-0.5 text-white ">
                        {item.title}
                      </dt>
                      <dd className=" whitespace-pre-line">
                        {item.description}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-first flex flex-col gap-4 lg:order-none">
              <p>
                〒214-0014 <br />{" "}
                神奈川県川崎市多摩区登戸2659リヴュリット向ヶ丘遊園
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.400404421596!2d139.564836315611!3d35.61785434105165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f0d8f0517817%3A0xbe67fa2fc1ec34e6!2z44Kr44OD44OI44K544K_44K444KqIFFVQVJURVLjgJDjg5Xjg6vjgrXjg7zjg5PjgrnjgJE!5e0!3m2!1sja!2sjp!4v1680428338833!5m2!1sja!2sjp"
                loading="lazy"
                className="h-80 w-full rounded-md lg:h-full"
              />
            </div>
          </div>
        </GridWraper>
      </section>
    </ScrollFade>
  );
};

export default InfoSec;

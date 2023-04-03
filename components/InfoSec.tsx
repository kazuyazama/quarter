import SecTitle from "./SecTitle";

const infoItem = [
  {
    title: "営業時間",
    description:
      "am9:00〜pm19:00\nカットの受付は18:45分まで カット以外は18:30まで",
  },
  {
    title: "定休日",
    description:
      "毎週月曜日・第3火曜日\n※祝日が月曜日に当たる場合はその翌日が定休日になります。",
  },
  {
    title: "アクセス",
    description:
      "〒214-0014\n神奈川県川崎市多摩区登戸2659リヴュリット向ヶ丘遊園\n駐車場は近くにコインパーキングがありますのでそちらでお願いしております。",
  },
  {
    title: "お問い合わせ",
    description: "TEL:044-387-1338\nMail:yuuen.quarter@gmail.com",
  },
];

const InfoSec = () => {
  return (
    <section className=" mx-auto max-w-screen-xl py-14">
      <div className="grid place-items-center gap-10">
        <SecTitle>店舗情報</SecTitle>

        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <ul>
              {infoItem.map((item) => (
                <li key={item.title} className=" mt-8 first-of-type:mt-0">
                  <dl className="flex flex-col items-start gap-2">
                    <dt className="  rounded-full bg-secondary px-6 py-0.5 text-white ">
                      {item.title}
                    </dt>
                    <dd className="whitespace-pre-line">{item.description}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.400404421596!2d139.564836315611!3d35.61785434105165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f0d8f0517817%3A0xbe67fa2fc1ec34e6!2z44Kr44OD44OI44K544K_44K444KqIFFVQVJURVLjgJDjg5Xjg6vjgrXjg7zjg5PjgrnjgJE!5e0!3m2!1sja!2sjp!4v1680428338833!5m2!1sja!2sjp"
              loading="lazy"
              className=" h-full w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSec;

import Image from "next/image";

const Staffs = () => {
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
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {stylistItem.map((item) => (
        <div
          key={item.stylist}
          className="flex items-center gap-6  bg-white px-6 py-10 drop-shadow-xl lg:items-start "
        >
          <Image src={item.img} alt={item.stylist} width={130} height={130} />
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
  );
};

export default Staffs;

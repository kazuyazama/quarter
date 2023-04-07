const Footer = () => {
  return (
    <footer className=" bg-primary text-white">
      <div className="  mx-auto max-w-screen-xl px-3 py-10 lg:px-0">
        <div className=" grid justify-around  ">
          <h3 className="mb-4 text-start text-xl font-bold">
            カットスタジオQUARTER
          </h3>
          <div className="grid gap-6 lg:gap-20 lg:grid-cols-2   ">
            <div className="">
              <p className=" leading-relaxed">
                〒214-0014
                <br />
                神奈川県川崎市多摩区登戸2659リヴュリット向ヶ丘遊園
                <br />
                <br />
                TEL：044-387-1338
              </p>
            </div>
            <div className="">
              <p className="inline-flex gap-4 flex-col leading-relaxed">
                <span>
                  営業時間：9:00〜PM19:00
                  <br />
                  （最終受付カットのみ18:45、カット以外18:30）
                </span>
                <span>
                  定休日：毎週月曜日・第3火曜日
                  <br />
                  ※月曜日が祝日の場合、その翌日が定休日になります
                </span>
              </p>
            </div>
          </div>
        </div>

        <span className="block pt-8 text-center">
          ©QUARTER All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

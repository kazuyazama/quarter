const Footer = () => {
  return (
    <footer className=" bg-primary text-white">
      <div className="  mx-auto max-w-screen-xl py-10">
        <div className="grid grid-cols-2   justify-items-center   ">
          <div className="">
            <h3 className="mb-2 text-lg font-bold ">営業時間</h3>
            <p className=" leading-relaxed">
              am9:00〜pm19:00
              <br />
              カットの受付は18:45
              <br />
              カット以外は18:30 <br />
              定休日　毎週月曜日・第3火曜日
              <br />
              ※祝日が月曜日当たる場合はその翌日が定休日になります。
            </p>
          </div>
          <div className="">
            <h3 className="mb-2 text-lg font-bold ">アクセス</h3>
            <p className=" leading-relaxed">
              〒214-0014
              <br />
              神奈川県川崎市多摩区登戸2659リヴュリット向ヶ丘遊園
              <br />
              TEL 044-387-1338
            </p>
          </div>
        </div>

        <span className="block pt-5 text-center">©Quarter</span>
      </div>
    </footer>
  );
};

export default Footer;

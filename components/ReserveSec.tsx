import Image from "next/image";
import SecTitle from "./SecTitle";
import Link from "next/link";
import { IconPhoneCall } from "@tabler/icons-react";

const ReserveSec = () => {
  return (
    <section className="bg-slate">
      <div className=" mx-auto max-w-screen-xl py-14">
        <div className="grid place-items-center gap-10">
          <SecTitle>予約</SecTitle>

          <h3>ご予約はお電話もしくはLINEにて承っております。</h3>

          <div className="grid grid-cols-2 items-center gap-5  ">
            <div className="flex items-center gap-2 text-2xl">
              <IconPhoneCall size={30} />
              <Link href="tel:044-387-1338">044-387-1338</Link>
            </div>

            <div>
              <Image alt="" src="/line-qr-code.jpg" width={300} height={300} />
            </div>
          </div>
          <p className="text-center">
            LINEでお問い合わせの場合は返事が遅れることがあります、ご了承ください。<br />
            当日予約の場合は電話がオススメです。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReserveSec;

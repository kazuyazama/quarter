import Image from "next/image";
import SecTitle from "./SecTitle";
import Link from "next/link";
import { IconPhoneCall } from "@tabler/icons-react";
import GridWraper from "./GridWraper";
import ScrollFade from "./ScrollFade";

const ReserveSec = () => {
  return (
    <ScrollFade>
      <section className="bg-slate">
        <div className=" mx-auto max-w-screen-xl px-3 py-20 lg:px-0">
          <GridWraper>
            <SecTitle>予約</SecTitle>

            <h3 className="text-center">
              ご予約はお電話にて <br className="lg:hidden" />
              承っております。(当日予約も可能です)
            </h3>

            <div className="grid items-center gap-14 lg:grid-flow-row lg:gap-5 ">
              <div className="flex items-center justify-center gap-2  text-2xl text-secondary ">
                <IconPhoneCall size={30} />
                <Link href="tel:044-387-1338">044-387-1338</Link>
              </div>
            </div>
          </GridWraper>
        </div>
      </section>
    </ScrollFade>
  );
};

export default ReserveSec;

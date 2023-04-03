import { ComponentProps } from "react";
import SecTitle from "./SecTitle";

type Props = {
  items: {
    title: string;
    price: string;
  }[];
  type: string;
} & ComponentProps<"div">;

const MenuItem = ({ items, ...props }: Props) => {
  //補足説明の条件分岐
  let description = "";
  switch (props.type) {
    case "カット":
      description =
        " ※高校生〜小学生以下の方にもカット・シャンプー・シェービング・セットが一緒になっています。\n※シャンプー、シェービングなしも可能ですが、料金は変わりませんのでご了承ください。";
      break;
    case "パーマ":
      description =
        "※髪の毛の長さ、パーマの強さによって値段が変わりますのでご相談ください。";
      break;
    case "カラー":
      description =
        "※特殊な場合(ハイライト、インナーカラーなど)、髪の毛の長さや量により別途料金がかかる場合もあります。\n※上記は単品メニューになるのでカット料金は別料金になります。";
      break;
    case "シェービング":
      description =
        "※石けんではなく、MOMO肌(保湿クリーム)でお顔を剃ることでお肌の赤み、かゆみ、ヒリヒリが出にくくなります。\nお肌の水分、油分をバランス良く与えることでケアしながらシェービングしていきます。";
      break;
    case "ヘッドスパ":
      description = "頭皮の健康・育毛・養毛致します！";
      break;
    default:
      return <div></div>;
  }
  return (
    <div className="grid gap-5">
      <SecTitle>{props.type}</SecTitle>
      <table className="w-full border-separate ">
        <tbody>
          {items.map((item) => (
            <tr
              key={item.title}
              className="flex items-start gap-52 border-b border-border py-4"
            >
              <td className="flex-1 whitespace-pre-line">{item.title}</td>
              <td className="font-bold">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {description && <p className=" whitespace-pre-line">{description}</p>}
      {props.type === "シェービング" && (
        <p className="text-secondary">
          ※お顔剃り前にする精油(アロマ)リンパケアマッサージ近々メニュー追加予定です。
        </p>
      )}
    </div>
  );
};

export default MenuItem;

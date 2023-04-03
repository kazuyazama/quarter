import MenuItem from "@/components/MenuItem";
import PageTitle from "@/components/pageTitle";
import {
  colorItems,
  cutItems,
  headSpaItems,
  permItems,
  shavingItems,
} from "@/data/menuItems";

export const metadata = {
  title: "メニュー",
};

const Menu = () => {
  return (
    <>
      <PageTitle>メニュー</PageTitle>
      <div className="mx-auto my-20 grid max-w-screen-md gap-20 px-3 lg:px-0">
        <MenuItem items={cutItems} type="カット" />
        <MenuItem items={permItems} type="パーマ" />
        <MenuItem items={colorItems} type="カラー" />
        <MenuItem items={shavingItems} type="シェービング" />
        <MenuItem items={headSpaItems} type="ヘッドスパ" />
      </div>
    </>
  );
};

export default Menu;

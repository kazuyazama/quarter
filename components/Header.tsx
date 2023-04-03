import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "メニュー",
    path: "/menu",
  },
  {
    label: "QUARTERについて",
    path: "/about",
  },
  {
    label: "店舗案内",
    path: "/info",
  },
  {
    label: "予約",
    path: "/reserve",
  },
];

const Header = () => {
  return (
    <header className="mx-auto flex  max-w-screen-xl items-center ">
      <div className="flex-1">
        <Link href="/">
        <Image src="/quarter-logo.svg" alt="logo" width={140} height={100} className="object-cover" />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.path}>
              <li className="px-14 py-5 text-secondary text-rose-300">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

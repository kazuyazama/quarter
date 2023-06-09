import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: {
    default: "カットスタジオQUARTER",
    template: "%s | カットスタジオQUARTER",
  },
  description: "カットスタジオQUARTERの公式ホームページです。",
};

const NotoSans = Noto_Sans_JP({
  preload: false,
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-notosans",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={`${NotoSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

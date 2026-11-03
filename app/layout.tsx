import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: {
    default: "カットスタジオQUARTER",
    template: "%s | カットスタジオQUARTER",
  },
  description: "カットスタジオQUARTERの公式ホームページです。",
};

// next/font/googleはVercelのビルド時にGoogle Fontsの取得がタイムアウトするため(Next 13.2はリトライなし)、
// linkタグで表示時に読み込む
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

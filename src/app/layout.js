import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eyeable Demo",
  description: "A demo app to test eye-able",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://translate-cdn.eye-able.com/eye-able-translate.js"
        />
        <Script
          async
          src="https://cdn.eye-able.com/configs/eyeable-poc.vercel.app.js"
        />

        <Script async src="https://cdn.eye-able.com/public/js/eyeAble.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

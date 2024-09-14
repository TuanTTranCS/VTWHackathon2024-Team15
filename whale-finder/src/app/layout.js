import localFont from "next/font/local";
import "./styles/globals.css";
import styles from "./layout.module.css";
import Logo from "@/components/Navigation/Logo";
import Navigation from "@/components/Navigation/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Whale Finder",
  description: "Whale Finder is a web app to find whales.",
};

export default function RootLayout({ children }) {
  const user = false;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <p>Welcome to Coco-founder!</p>
          </div>

          <div className={styles.navbarWrapper}>
            <Logo />
            <Navigation />
          </div>

          <div className={styles.mainWrapper}>{children}</div>
        </div>
      </body>
    </html>
  );
}

// {user ? (
//   <div className={styles.headerWrapper}>
//     <p className={styles.title}>Welcome to Coco-founder</p>
//   </div>
// ) : (
//   <div className={styles.headerWrapper}>
//     <p className={styles.title}>Welcome to Coco-founder</p>
//   </div>
// )}

// left navbar color: 241, 241, 241


import styles from "../layout.module.css";
import Logo from "@/components/Navigation/Logo";
import Navigation from "@/components/Navigation/Navigation";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
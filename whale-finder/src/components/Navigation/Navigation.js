import styles from "./Navigation.module.css";
import Navbar from "./Navbar";

function Navigation() {
  return (
    <NavigationWrapper>
      <Navbar />
    </NavigationWrapper>
  );
}

const NavigationWrapper = ({ children }) => {
  return <div className={styles.NavigationWrapper}>{children}</div>;
};

export default Navigation;


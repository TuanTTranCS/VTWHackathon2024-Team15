import styles from "./Navigation.module.css";

function Navigation() {
  return <NavigationWrapper>Navigation</NavigationWrapper>;
}

const NavigationWrapper = ({ children }) => {
  return <div className={styles.NavigationWrapper}>{children}</div>;
};

export default Navigation;


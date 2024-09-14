import styles from "./Logo.module.css";

function Logo() {
  return <LogoWrapper>Logo</LogoWrapper>;
}

const LogoWrapper = ({ children }) => {
  return <div className={styles.LogoWrapper}>{children}</div>;
};

export default Logo;


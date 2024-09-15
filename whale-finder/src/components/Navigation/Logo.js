import { Smile } from "react-feather";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <LogoWrapper>
      <BrandName />
    </LogoWrapper>
  );
}

const LogoWrapper = ({ children }) => {
  return <div className={styles.LogoWrapper}>{children}</div>;
};

const Icon = () => {
  return (
    <div>
      <Smile size="1.875rem" />
    </div>
  );
};

const BrandName = () => {
  return (
    <div className={styles.BrandName}>
      <p >Coco-Founder</p>
    </div>
  );
};

export default Logo;


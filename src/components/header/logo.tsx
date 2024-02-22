import Image from "next/image";
import styles from "./header.module.scss";

export default function Logo() {
  return (
    <Image
    className={styles.logo}
    alt="logo"
    src="/logo.png" 
    width={120} 
    height={127}
  />
  );
}

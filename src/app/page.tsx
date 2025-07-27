import styles from "./Home.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt=""
                width={200}
                height={200}
              />
            </Link>
          </div>

          <div className={styles.navRight}>
            <Link href="/">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#flyer">Flyer</Link>
          </div>

        </div>
      </header>
    </>
  );
}

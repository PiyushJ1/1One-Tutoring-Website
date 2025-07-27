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
                width={100}
                height={100}
              />
            </Link>
            
            <p>Get Ahead and Stay Ahead</p>
          </div>

          <div className={styles.navRight}>
            <Link href="/">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#flyer">Flyer</Link>
          </div>
        </div>
      </header>

      <main className={styles.heroContainer}>
        <div className={styles.contentContainer}>
          <Image className={styles.heroImage}
            src="/logo.png"
            alt=""
            width={500}
            height={500}
          />

          <h1 className={styles.tagline}>
            Get Ahead and Stay Ahead
          </h1>

          <h2 className={styles.description}>
            <br/>Looking for 1 on One Tutoring? <br/><br/>
            With top ATAR Achieving Tutors we help students GET AHEAD and STAY AHEAD! <br/><br/>
            Our coaching is mapped to the Aus. Curriculum and based in the Hills District <br/><br/>
            Provide top Tutoring for students in Yrs 2-11 looking to get ahead and stay ahead
          </h2>
        </div>
      </main>

      <section id="services" className={styles.aboutSection}>
        
      </section>

    </>
  );
}

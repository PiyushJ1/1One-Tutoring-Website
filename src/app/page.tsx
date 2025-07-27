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
                width={80}
                height={80}
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

          <h2 className={styles.description}>
            <span className={styles.heroText}>Looking for 1-on-One Tutoring? <br/><br/></span>
            With top ATAR-achieving tutors, we help students <span className={styles.tagline}>Get Ahead and Stay Ahead! </span> <br/>
            Our personalised coaching is mapped to the Australian Curriculum and based in the Hills District. <br/><br/>

            We provide top tutoring for students from Years 2 to Year 11 who want to build confidence, improve results, and stay ahead of the curve.
          </h2>
        </div>
      </main>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionDescription}>
            Expert tutoring in core subjects to help students excel academically
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/file.svg"
                  alt="English Tutoring"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>English</h3>
                <p>Comprehensive English tutoring covering reading comprehension, creative writing, essay structure, and literary analysis. Build confidence in communication and critical thinking skills.</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/globe.svg"
                  alt="Mathematics Tutoring"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Mathematics</h3>
                <p>From basic arithmetic to advanced calculus, our math tutoring covers all levels. Focus on problem-solving techniques, conceptual understanding, and exam preparation.</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/window.svg"
                  alt="Science Tutoring"
                  width={80}
                  height={80}
                  className={styles.serviceIcon}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Science</h3>
                <p>Engaging science tutoring in biology, chemistry, and physics. Hands-on learning approach with practical experiments and real-world applications to spark curiosity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="flyer" className={styles.flyerSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Information Flyer</h2>
          <div className={styles.flyerPlaceholder}>
            <div className={styles.flyerContent}>
              <Image
                src="/file.svg"
                alt="Flyer"
                width={100}
                height={100}
                className={styles.flyerIcon}
              />
              <h3>Download Our Flyer</h3>
              <p>Get detailed information about our tutoring programs, pricing, and schedules.</p>
              <button className={styles.downloadButton}>Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionDescription}>
            Ready to get ahead? Get in touch with us today!
          </p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <div className={styles.contactItem}>
                <strong>Location:</strong>
                <p>Hills District, Sydney</p>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <p>info@onetutor.com.au</p>
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <p>+61 XXX XXX XXX</p>
              </div>
              <div className={styles.contactItem}>
                <strong>Years:</strong>
                <p>Tutoring for Years 2-11</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h3>Send us a Message</h3>
              <form className={styles.form}>
                <input type="text" placeholder="Your Name" className={styles.formInput} />
                <input type="email" placeholder="Your Email" className={styles.formInput} />
                <input type="text" placeholder="Student Year Level" className={styles.formInput} />
                <select className={styles.formInput}>
                  <option value="">Select Subject</option>
                  <option value="english">English</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="multiple">Multiple Subjects</option>
                </select>
                <textarea placeholder="Tell us about your tutoring needs..." rows="4" className={styles.formTextarea}></textarea>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

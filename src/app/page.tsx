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
            Expert tutoring in core subjects with proven results
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/maths.avif"
                  alt=""
                  layout="responsive"
                  width={600}
                  height={600}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Maths</h3>
                <p><strong>Expert Guidance</strong></p><br/>
                <p>Aid with the complexities of problem-solving</p><br/>
                <p><strong> Mathematics (Years 2–10)</strong></p><br/>
                <p><strong>Year 11: </strong> 
                  General,
                  Advanced,
                  Extension 1
                </p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/eng.avif"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>English</h3>
                <p><strong>Develop Excellence</strong></p><br/>
                <p>Excel in Comprehension and Essay Writing</p><br/>
                <p><strong> English (Years 2–10)</strong></p><br/>
                <p><strong>Year 11: </strong> 
                  Standard,
                  Advanced,
                  Extension 1
                </p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src="/science.avif"
                  alt="Science Tutoring"
                  width={80}
                  height={80}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Science & Commerce</h3>
                <p><strong>Achieve Your Goals</strong></p><br/>
                <strong>Science (Years 2–10)</strong><br/><br/>
                <strong>Commerce (Years 2–10)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flyer" className={styles.flyerSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Information Flyer</h2>
          <p className={styles.sectionDescription}>
            Download or view our comprehensive tutoring information guide
          </p>
          
          <div className={styles.flyerContainer}>
            <div className={styles.flyerHeader}>
              <h3>Tutoring Programs & Information</h3>
              <a 
                href="/Flyer.pdf" 
                download 
                className={styles.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download PDF
              </a>
            </div>
            
            <div className={styles.pdfViewer}>
              <iframe
                src="/Flyer.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=page-width&view=Fit"
                width="100%"
                height="100%"
                title="Tutoring Information Flyer"
                className={styles.pdfFrame}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/*
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

"use client";

import styles from "./Home.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
            <button onClick={scrollToTop} className={styles.homeButton}>Home</button>
            <Link href="#services">Services</Link>
            <Link href="#flyer">Flyer</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </header>

      <main className={styles.heroContainer}>
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroGradient}></div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.heroImageWrapper}>
            <Image className={styles.heroImage}
              src="/logo.png"
              alt=""
              width={500}
              height={500}
              priority
            />
            <div className={styles.heroImageGlow}></div>
          </div>

          <h2 className={styles.description}>
            <span className={styles.heroText}>Looking for 1-on-One Tutoring? <br/><br/></span>
            With <span className={styles.font}>top ATAR-achieving tutors</span>, we help students <span className={styles.tagline}>Get Ahead and Stay Ahead! </span> <br/>
            Our personalised coaching is mapped to the Australian Curriculum and <span className={styles.font}>based in the Hills District.</span> <br/><br/>
            We provide top tutoring for students from Years 2 to Year 11 who want to <span className={styles.font}>build confidence, improve results, and stay ahead of the curve.</span>
          </h2>
          
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.ctaButton}>
              Get Started Today
            </a>
            <a href="#services" className={styles.secondaryButton}>
              Our Services
            </a>
          </div>
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
                  src="/eng.png"
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
                Download PDF
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
      
      <section id="contact" className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionDescription}>
            Ready to get ahead? Get in touch with us today!
          </p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email</strong>
                <a href="mailto:1onetutoring@gmail.com" className={styles.contactLink}>
                  1onetutoring@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Phone</strong>
                <a href="tel:0434546464" className={styles.contactLink}>
                  0434 546 464
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactLabel}>
                  <strong>Facebook</strong>
                  <Image 
                    src="/facebook.png" 
                    alt="facebook icon" 
                    className={styles.facebookIcon}
                    width={24}
                    height={24}
                  />
                </div>
                <a 
                href="https://www.facebook.com/profile.php?id=100043367232479" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.contactLink}
                >
                  Visit our page
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Location</strong>
                <p>2 De Villiers Rise, Bella Vista NSW 2153</p>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9246.03604112985!2d150.95108851233687!3d-33.72955127316864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129f5f89d31c9b%3A0xcdb0053bab1bc40a!2s1One%20Tutoring!5e1!3m2!1sen!2sau!4v1753605217609!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapEmbed}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

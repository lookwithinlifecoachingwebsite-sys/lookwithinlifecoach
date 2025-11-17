import Image from "next/image";
import styles from "../page.module.css";
import VideoTestimonialSlider from "../components/VideoTestimonialSlider";
import ChatIcon from "../components/ChatIcon";
import AboutImagePage from "../AboutImagePage.png";

export const metadata = {
  title: "About Shelia Malcolm | Certified Life Coach | Look Within Life Coaching",
  description: "Meet Shelia Malcolm, CEO and certified John Maxwell Transformational Life Coach. Learn about her journey, credentials, and passion for helping others achieve their full potential.",
  keywords: "Shelia Malcolm, life coach, John Maxwell, transformational coaching, about us, certified coach, CEO, Free Me From Me, bestselling author",
  alternates: {
    canonical: 'https://lookwithinlifecoaching.com/about',
  },
  openGraph: {
    title: "About Shelia Malcolm | Certified Life Coach",
    description: "Meet Shelia Malcolm, CEO and certified John Maxwell Transformational Life Coach. Amazon bestselling author and award-winning speaker.",
    url: 'https://lookwithinlifecoaching.com/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: "About Shelia Malcolm | Certified Life Coach",
    description: "Meet Shelia Malcolm, CEO and certified John Maxwell Transformational Life Coach.",
  },
};

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroWrapperSubpage}>
        <div className={styles.heroSubpage}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              About Look Within Life Coaching
            </h1>
            <p className={styles.heroDescription}>
              Look Within Life Coaching LLC is an organization dedicated to being a growth catalyst
              to individuals, businesses and non-profit organizations. Our team helps clients create
              a culture of excellence that gives everyone the opportunity to reach their full potential.
            </p>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Schedule a consultation
            </a>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={AboutImagePage}
              alt="About Look Within Life Coaching"
              className={styles.subpageImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionDescription}>
            Certified John Maxwell Transformational Life Coach
          </p>
          <div className={styles.coachingGrid}>
            <div id="about-organization" className={styles.coachingItem}>
              <p className={styles.coachingItemDescription}>
                Look Within Life Coaching LLC is an organization dedicated to being a growth catalyst
                to individuals, businesses and non-profit organizations. Our team helps clients to create
                a culture of excellence that gives everyone in the organization the best opportunity to
                reach their full potential.
              </p>
            </div>
            <div id="about-shelia" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Meet Shelia Malcolm</h3>
              <p className={styles.coachingItemDescription}>
                Hello, my name is Shelia Malcolm, I partner with women to help them discover How to Find
                more peace, joy, and fulfillment in their lives.
              </p>
            </div>
            <div id="about-journey" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Shelia&apos;s Journey</h3>
              <p className={styles.coachingItemDescription}>
                As a Popular Speaker, Coach & Author of the best-selling book &quot;Free Me from Me: Chains
                were meant to be broken&quot; Shelia works with women who are looking for more peace, joy, and
                fulfillment in their lives.
              </p>
              <p className={styles.coachingItemDescription}>
                Shelia worked in corporate America for 20+ years and during that time went through a divorce
                while raising two kids, which gave her a front-row seat in dealing with adversity and rising
                above the various challenges in her life. As a result, she knows firsthand what it&apos;s like to
                look for fulfillment and to do so from a healthy place, which is what she talks about during
                her speaking and coaching activities.
              </p>
            </div>
            <div id="about-development" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Professional Development</h3>
              <p className={styles.coachingItemDescription}>
                As a part of her journey, she partnered with The John Maxwell Team, who through their elite
                Transformational training program, was able to uplevel her skillset when it came to Leadership
                & Training. Some of Shelia&apos;s work has appeared in VoyageATL and ShoutOut Atlanta. And in 2019
                she was recognized by the Jacksonville Business Journal for outstanding accomplishments by a
                small business. When not working, Shelia loves spending time with family and friends. You will
                also find her outdoors, intentionally getting her Mind, Body and Spirit re-energized.
              </p>
            </div>
            <div id="about-social" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Social Media Impact</h3>
              <p className={styles.coachingItemDescription}>
                Each week Shelia shares free life coaching lessons with our Igniter Family on Facebook,
                YouTube, Instagram and LinkedIn. Shelia&apos;s video was watched by 1.2 million people.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                <a href="https://www.facebook.com/lookwithinlifecoaching" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#faedcd', color: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UC8pG8q-aKP9Oxox4zzPx7zg" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#faedcd', color: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/lookwithinu/?hl=en" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#faedcd', color: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sheliamalcolm/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', backgroundColor: '#faedcd', color: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.helpYouSection}>
        <div className={styles.helpYouContainer}>
          <h2 className={styles.sectionTitle}>What Clients Say</h2>
          <p className={styles.sectionDescription}>
            Real stories from real people
          </p>
          <div className={styles.helpYouCards}>
            <div className={styles.helpYouCard}>
              <h3 className={styles.helpYouCardTitle}>Shamika W. - Jacksonville, FL</h3>
              <p className={styles.helpYouCardDescription}>
                &quot;...helped me identify what I needed to do to become a better leader, to have a
                profitable and productive day every time I wake up&quot;
              </p>
            </div>
            <div className={styles.helpYouCard}>
              <h3 className={styles.helpYouCardTitle}>Joelle - Jacksonville, FL</h3>
              <p className={styles.helpYouCardDescription}>
                &quot;I started watching your videos this week. I&apos;m going back looking at your previous
                ones... You are speaking the exact words that God has given me in this season while I am
                waiting and growing. I&apos;m creating my vision board this week. I&apos;m very excited about that.
                Have a blessed day and thank you!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Coach Section */}
      <section id="certified" className={styles.services}>
        <div className={styles.servicesContainer} style={{ maxWidth: '1200px', margin: '0 auto', display: 'block' }}>
          <h2 className={styles.sectionTitle}>Certified Coach</h2>
          <p className={styles.sectionDescription}>
            Professional credentials and certifications
          </p>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Certified John Maxwell Transformational Life Coach</h3>
              <p className={styles.coachingItemDescription}>
                As a certified John Maxwell Transformational Life Coach, Shelia has the training and expertise
                to help her clients become better leaders, parents, spouses, and a more fulfilled version of
                themselves. The John Maxwell approach to Life Coaching has been effective in developing leaders
                in some of the largest corporations in over 150 countries. We are confident you will find value
                in your Life Coaching sessions with Shelia Malcolm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Ready to Begin Your Journey?</h2>
          <p className={styles.sectionDescription}>
            Take the first step towards transformation today
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className={styles.helpYouSection}>
        <div className={styles.helpYouContainer}>
          <h2 className={styles.sectionTitle}>Video Client Testimonials</h2>
          <p className={styles.sectionDescription}>
            Hear from our clients about their transformation journey
          </p>
          <VideoTestimonialSlider />
        </div>
      </section>

      {/* Chat Icon */}
      <ChatIcon />
    </div>
  );
}

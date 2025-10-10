import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "./components/Testimonials";
import StarRating from "./components/StarRating";
import MainImage from "./Main Image.png";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Transform your life through personalized coaching
          </h1>
          <p className={styles.heroDescription}>
            At Look Within, we combine proven coaching methodologies with personalized approaches.
            We can help you achieve your goals and thrive, as our programs are designed for everyone
            seeking positive change in their life.
          </p>
          <button className={styles.ctaButton}>
            Book a consultation
          </button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={MainImage}
            alt="Life Coach"
            className={styles.mainImage}
            priority
          />
        </div>
      </section>

      {/* Rating Section */}
      <section className={styles.rating}>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingItem}>
            <StarRating />
            <p className={styles.ratingText}>500+ Success Stories</p>
          </div>
          <div className={styles.ratingDivider}></div>
          <div className={styles.ratingItem}>
            <div className={styles.ratingNumber}>4.9/5</div>
            <p className={styles.ratingText}>Average Rating</p>
          </div>
          <div className={styles.ratingDivider}></div>
          <div className={styles.ratingItem}>
            <div className={styles.ratingNumber}>95%</div>
            <p className={styles.ratingText}>Client Satisfaction</p>
          </div>
          <div className={styles.ratingDivider}></div>
          <div className={styles.ratingItem}>
            <div className={styles.ratingNumber}>10+</div>
            <p className={styles.ratingText}>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <div className={`${styles.serviceImageWrapper} ${styles.yellowBg}`}>
              <div className={styles.serviceImagePlaceholder}>
                <span>Service 1</span>
              </div>
            </div>
            <h3 className={styles.serviceTitle}>Individual Coaching</h3>
            <p className={styles.serviceDescription}>
              1:1 personalized coaching focused on your unique goals.
              Perfect for a variety of life transitions and growth objectives.
            </p>
            <button className={styles.learnMoreButton}>Learn more</button>
          </div>

          <div className={styles.serviceCard}>
            <div className={`${styles.serviceImageWrapper} ${styles.pinkBg}`}>
              <div className={styles.serviceImagePlaceholder}>
                <span>Service 2</span>
              </div>
            </div>
            <h3 className={styles.serviceTitle}>Group Coaching</h3>
            <p className={styles.serviceDescription}>
              8 to 10 weeks group development program focused on specific topics,
              combining coaching and collaborative learning.
            </p>
            <button className={styles.learnMoreButton}>Learn more</button>
          </div>
        </div>
      </section>

      {/* Additional Coaching Section */}
      <section className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Additional Coaching Services</h2>
          <p className={styles.sectionDescription}>
            Explore our comprehensive range of coaching programs designed to support your personal
            and professional growth journey.
          </p>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Career Transition Coaching</h3>
              <p className={styles.coachingItemDescription}>
                Navigate career changes with confidence and clarity. We help you identify your strengths,
                explore new opportunities, and create actionable plans for your next chapter.
              </p>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Leadership Development</h3>
              <p className={styles.coachingItemDescription}>
                Enhance your leadership skills and executive presence. Build the capabilities needed
                to inspire teams and drive organizational success.
              </p>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Work-Life Balance</h3>
              <p className={styles.coachingItemDescription}>
                Create sustainable harmony between your professional ambitions and personal wellbeing.
                Learn strategies to manage stress and prioritize what matters most.
              </p>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Personal Growth</h3>
              <p className={styles.coachingItemDescription}>
                Unlock your full potential and achieve meaningful personal transformation.
                Develop self-awareness and build habits that support lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}

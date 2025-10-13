import Image from "next/image";
import styles from "./page.module.css";
import Testimonials from "./components/Testimonials";
import StarRating from "./components/StarRating";
import ChatIcon from "./components/ChatIcon";
import PodcastParticles from "./components/PodcastParticles";
import MainImage from "./Main Image 2.png";
import AmazonBadge from "./amazon-best-selling-book-badge-nuytxlltt3m1w8hu-nuytxlltt3m1w8hu.png";
import GroupCoachingImage from "./GroupCoaching.png";
import IndividualCoachingImage from "./IndividualCoaching.png";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Transform your life through personalized coaching
            </h1>
            <p className={styles.heroDescription}>
              At Look Within, we combine proven coaching methodologies with personalized approaches.
              We can help you achieve your goals and thrive, as our programs are designed for everyone
              seeking positive change in their life.
            </p>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Book a consultation
            </a>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={MainImage}
              alt="Life Coach"
              className={styles.mainImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section id="ratings" className={styles.rating}>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingItem}>
            <StarRating />
            <p className={styles.ratingText}>Success Rate</p>
          </div>
          <div className={styles.ratingDivider}></div>
          <div className={styles.ratingItem}>
            <div className={styles.ratingNumber}>4.9/5</div>
            <p className={styles.ratingText}>Average Rating</p>
          </div>
          <div className={styles.ratingDivider}></div>
          <div className={styles.ratingItem}>
            <Image
              src={AmazonBadge}
              alt="Amazon Best Selling Book"
              className={styles.amazonBadge}
              width={150}
              height={150}
            />
            <p className={styles.ratingText}>Best Selling Book</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <div className={`${styles.serviceImageWrapper} ${styles.yellowBg}`}>
              <Image
                src={IndividualCoachingImage}
                alt="Individual Coaching"
                className={styles.serviceImage}
                width={600}
                height={600}
                quality={100}
              />
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
              <Image
                src={GroupCoachingImage}
                alt="Group Coaching"
                className={styles.serviceImage}
                width={600}
                height={600}
                quality={100}
              />
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

      {/* Help You Section */}
      <section id="help" className={styles.helpYouSection}>
        <div className={styles.helpYouContainer}>
          <h2 className={styles.sectionTitle}>How We Can Help You</h2>
          <p className={styles.sectionDescription}>
            Discover the transformative ways our coaching can support your journey to success and fulfillment.
          </p>
          <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.helpYouButton}>15 Minute Meeting - Free Coaching Session</a>
          <div className={styles.helpYouCards}>
            <div id="help-you" className={styles.helpYouCard}>
              <h3 className={styles.helpYouCardTitle}>I Can Help You</h3>
              <ul className={styles.helpYouList}>
                <li>Develop lasting relationships that align with your core values.</li>
                <li>Create Boundaries for healthy Whole-Life living.</li>
                <li>Discover a New meaning for D.I.V.O.R.C.E so you can THRIVE!</li>
                <li>Develop Self-Confidence, Self-Love, and Resilience from INSIDE.</li>
                <li>Identify how you are WIRED and use it to grow and build your LEGACY.</li>
              </ul>
            </div>
            <div id="bounce-back" className={styles.helpYouCard}>
              <h3 className={styles.helpYouCardTitle}>Bounce Back</h3>
              <p className={styles.helpYouCardDescription}>
                Look Within Life Coaching LLC is an organization dedicated to being a growth catalyst to individuals, businesses and non-profit organizations. Our team helps clients to create a culture of excellence that gives everyone in the organization the best opportunity to reach their full potential.
              </p>
              <p className={styles.helpYouCardDescription}>
                Shelia Malcolm is both the Owner and the CEO (Compassionate Empowerment Officer) of Look Within Life Coaching LLC. As a certified John Maxwell Transformational Life Coach, Shelia has inspired millions around the world with her coaching skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Coaching Section */}
      <section id="coaching-services" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Coaching Services</h2>
          <p className={styles.sectionDescription}>
            Explore our comprehensive range of coaching programs designed to support your personal
            and professional growth journey.
          </p>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Individual Coaching</h3>
              <p className={styles.coachingItemDescription}>
              Wherever you are on your life&apos;s journey, Look Within Life Coaching is here to be the bridge to your next breakthrough.
              We empower and equip you with the clarity and confidence that is needed to embody Significance. Shelia Malcolm will customize her approach to help you identify and overcome every obstacles that is hindering your breakthrough.
              </p>
              <a href="/individual-coaching#individual-coaching-services" className={styles.moreLink}>More</a>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Corporate Services</h3>
              <p className={styles.coachingItemDescription}>
              8 out 10 employees state they feel overwhelmed and overworked. Unfortunately, most Corporate Employee Benefit / Counseling Programs do not offer Life Coaching as part of their services. Employees need help setting boundaries on projects, strategies for home & work balance, encouragement to help rebuild their emotional life after the death of a relationship (divorce/break-up) or some other emotional impact.
Do you want more from your Employee Assistance Program (EAP) counseling services or any counselor you partner with? Look no further!
              </p>
              <a href="/individual-coaching#corporate-services" className={styles.moreLink}>More</a>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Group Coaching</h3>
              <p className={styles.coachingItemDescription}>
              Look Within Life Coaching LLC has developed a series of 90 day group coaching programs that works together to deliver measurable results. Our group session makes Life Coaching services affordable for every budget and it also provides clients with a built in support system.
              </p>
              <a href="/group-coaching" className={styles.moreLink}>More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className={styles.podcastSection}>
        <PodcastParticles />
        <div className={styles.podcastContainer}>
          <div className={styles.podcastContent}>
            <div className={styles.podcastPlaceholder}>
              <span>Podcast Player/Embed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Chat Icon */}
      <ChatIcon />
    </div>
  );
}

import Image from "next/image";
import styles from "../page.module.css";
import IndividualCoachingImage from "../IndividualCoaching.png";
import ChatIcon from "../components/ChatIcon";

export const metadata = {
  title: "Individual Coaching | One-on-One Life Coaching | Look Within Life Coaching",
  description: "Personalized 1:1 coaching sessions focused on your unique goals. Transform your life with customized coaching from certified life coach Shelia Malcolm.",
  keywords: "individual coaching, one-on-one coaching, personal coaching, life coach, personalized coaching, private sessions, breakthrough coaching, career mapping, emotional healing, leadership development, boundaries, corporate coaching",
  alternates: {
    canonical: 'https://lookwithinlifecoaching.com/individual-coaching',
  },
  openGraph: {
    title: "Individual Coaching | One-on-One Life Coaching",
    description: "Personalized 1:1 coaching sessions focused on your unique goals. Transform your life with customized coaching from certified life coach Shelia Malcolm.",
    url: 'https://lookwithinlifecoaching.com/individual-coaching',
    type: 'website',
    images: [
      {
        url: 'https://lookwithinlifecoaching.com/og-individual-coaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Individual Life Coaching Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Individual Coaching | One-on-One Life Coaching",
    description: "Personalized 1:1 coaching sessions focused on your unique goals. Transform your life with customized coaching.",
    images: ['https://lookwithinlifecoaching.com/og-individual-coaching.jpg'],
  },
};

export default function IndividualCoaching() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroWrapperSubpage}>
        <div className={styles.heroSubpage}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Individual Coaching
            </h1>
            <p className={styles.heroDescription}>
              Wherever you are on your life&apos;s journey, Look Within Life Coaching is here to be
              the bridge to your next breakthrough. We empower and equip you with the clarity and
              confidence needed to embody significance.
            </p>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Book your session
            </a>
          </div>
          <div className={styles.heroImage}>
            {/* Image placeholder removed */}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="services" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>What to Expect</h2>
          <p className={styles.sectionDescription}>
            Personalized coaching tailored to your unique journey
          </p>
          <div className={styles.coachingGrid}>
            <div id="individual-coaching-services" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Individual Coaching</h3>
              <p className={styles.coachingItemDescription}>
                DO YOU OFTEN FEEL OVERWHELMED? STRESSED OUT? FRUSTRATED? ILL-EQUIPPED FOR SUCCESS???
              </p>
              <p className={styles.coachingItemDescription}>
                Wherever you are on your life&apos;s journey, Look Within Life Coaching is here to be the
                bridge to your next breakthrough. We empower and equip you with the clarity and confidence
                that is needed to embody Significance. Shelia Malcolm will customize her approach to help you
                identify and overcome every obstacles that is hindering your breakthrough.
              </p>
              <p className={styles.coachingItemDescription}>
                Why am I qualified to be your Life Coach? I have an inside track. I was right where you are
                nine years ago when my life came crashing down. I turned my emotional pain into precise purpose
                to serve you today and beyond. I want you to know help is here. Call 866-280-4175 to schedule
                an appointment with Shelia Malcolm.
              </p>
            </div>
            <div id="corporate-services" className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Corporate Services</h3>
              <p className={styles.coachingItemDescription}>
                8 out 10 employees state they feel overwhelmed and overworked. Unfortunately, most Corporate
                Employee Benefit / Counseling Programs do not offer Life Coaching as part of their services.
                Employee need help setting boundaries on projects, strategies for home & work balance,
                encouragement to help rebuild their emotional life after the death of a relationship
                (divorce/break-up) or some other emotional impact.
              </p>
              <p className={styles.coachingItemDescription}>
                Do you want more from your Employee Assistance Program (EAP) counseling service or any counselor
                you partner with? Look no further!
              </p>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Life Coaching Services</h3>
              <p className={styles.coachingItemDescription}>
                Here is a brief list of Life Coaching Services:
              </p>
              <ul className={styles.helpYouList}>
                <li>Boundaries - setting healthy boundaries at work (peers & boss)</li>
                <li>Boundaries - setting healthy boundaries at home with family & friends</li>
                <li>Career Mapping - finding your purpose & professional identity</li>
                <li>Emotional Healing - identifying and healing emotional wounds</li>
                <li>Leadership Development - helping leaders better inspire and coach their teams</li>
                <li>Speaker - Shelia Malcolm is available to speak at your next event or team meeting</li>
              </ul>
              <p className={styles.coachingItemDescription}>
                These are just a few of the many services provided by Look Within Life Coaching LLC. Call
                866-280-4175 to schedule an appointment with Shelia Malcolm to begin your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.helpYouSection}>
        <div className={styles.helpYouContainer}>
          <h2 className={styles.sectionTitle}>Ready to Start Your Transformation?</h2>
          <p className={styles.sectionDescription}>
            Schedule your free 15-minute consultation today
          </p>
          <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.helpYouButton}>
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* Chat Icon */}
      <ChatIcon />
    </div>
  );
}

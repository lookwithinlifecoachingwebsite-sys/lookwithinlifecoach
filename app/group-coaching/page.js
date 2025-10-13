import Image from "next/image";
import styles from "../page.module.css";
import GroupCoachingImage from "../GroupCoaching.png";
import ChatIcon from "../components/ChatIcon";

export const metadata = {
  title: "Group Coaching | 90-Day Programs | Look Within Life Coaching",
  description: "Join our transformative 90-day group coaching programs. Affordable life coaching with built-in support system. Programs include divorce recovery, youth career development, and book club.",
  keywords: "group coaching, group programs, 90 day programs, team coaching, workshop, group development, affordable coaching, support system, divorce recovery, youth career development, Free Me From Me book club, transformational coaching",
  alternates: {
    canonical: 'https://lookwithinlifecoaching.com/group-coaching',
  },
  openGraph: {
    title: "Group Coaching | 90-Day Programs",
    description: "Join our transformative 90-day group coaching programs. Affordable life coaching with built-in support system.",
    url: 'https://lookwithinlifecoaching.com/group-coaching',
    type: 'website',
    images: [
      {
        url: 'https://lookwithinlifecoaching.com/og-group-coaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Group Coaching Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Group Coaching | 90-Day Programs",
    description: "Join our transformative 90-day group coaching programs. Affordable life coaching with built-in support system.",
    images: ['https://lookwithinlifecoaching.com/og-group-coaching.jpg'],
  },
};

export default function GroupCoaching() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroWrapperSubpage}>
        <div className={styles.heroSubpage}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Group Coaching Programs
            </h1>
            <p className={styles.heroDescription}>
              Look Within Life Coaching LLC has developed a series of 90-day group coaching programs
              that work together to deliver measurable results. Our group sessions make Life Coaching
              services affordable for every budget and provide clients with a built-in support system.
            </p>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Join a program
            </a>
          </div>
          <div className={styles.heroImage}>
            {/* Image placeholder removed */}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section id="transformation" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>90 Day Transformation</h2>
          <p className={styles.sectionDescription}>
            Experience transformation together with like-minded individuals
          </p>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingItem}>
              <p className={styles.coachingItemDescription}>
                Look Within Coaching LLC has developed multiple 90 day group programs that works together
                to deliver measurable results.
              </p>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>Here is our Top 3 Programs</h3>
              <ul className={styles.helpYouList}>
                <li>Author led book club - Free Me From Me</li>
                <li>Divorce women group</li>
                <li>Youth and young adult career development</li>
              </ul>
            </div>
            <div className={styles.coachingItem}>
              <h3 className={styles.coachingItemTitle}>WE JUST CAN&apos;T RUSH THE PROCESS</h3>
              <p className={styles.coachingItemDescription}>
                Imagine a frozen pizza recipe says you must heat in the oven for 20 minutes at 350 degrees.
                However because you are hungry you turn up the oven to 700 degrees and cook the pizza for 10
                minutes which results in small kitchen fire and burnt pizza. If we need to give frozen pizza
                the approximate time, how much more critical is it for us to give appropriate time to life
                alternating breakthrough in our career, finances, marriage, fitness and mental health.
              </p>
              <p className={styles.coachingItemDescription}>
                <a href="#programs" className={styles.moreLink}>Click Here for Full List of Programs</a>
              </p>
              <h4 className={styles.coachingItemTitle}>Support Network:</h4>
              <p className={styles.coachingItemDescription}>
                One of the benefit of joining a Life Coaching Group is that it provides you with a natural
                support network of individuals on the same journey as yourself. We limit each group to 12 to
                foster a close and intimate community.
              </p>
              <p className={styles.coachingItemDescription}>
                To make Life Coaching services affordable for everyone, Look Within Life Coaching has developed
                a monthly membership program. This way the full cost of a certified Life Coach is spread across
                a group of 10 - 12 individuals.
              </p>
              <h4 className={styles.coachingItemTitle}>Program Overview - UNDERSTANDING SELF &quot;The Problem Within&quot;</h4>
              <ul className={styles.helpYouList}>
                <li>Seeing Yourself Clearly - WHAT MAKES YOU…</li>
                <li>Five Love Languages - understanding how you give & receive love</li>
                <li>Understanding Your Relationship to Money</li>
                <li>Emotional Connection to Physical Health</li>
                <li>Importance of Boundaries</li>
                <li>Spiritual Connection - attending church is not enough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Ready to Join a Group?</h2>
          <p className={styles.sectionDescription}>
            Contact us to learn about upcoming programs and enrollment
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Chat Icon */}
      <ChatIcon />
    </div>
  );
}

import styles from "../page.module.css";
import VideoGallery from "../components/VideoGallery";
import ChatIcon from "../components/ChatIcon";

export const metadata = {
  title: "Speaking Events | Keynote Speaker | Look Within Life Coaching",
  description: "Book Shelia Malcolm for your next event. International bestselling author and award-winning Toastmaster. Inspiring keynote speeches, workshops, and presentations on leadership, personal development, and transformation.",
  keywords: "keynote speaker, speaking events, workshops, presentations, motivational speaker, leadership speaker, corporate events, Shelia Malcolm, international bestselling author, Toastmaster, public speaking, event speaker, transformational speaker",
  alternates: {
    canonical: 'https://lookwithinlifecoaching.com/speaking-events',
  },
  openGraph: {
    title: "Speaking Events | Keynote Speaker Shelia Malcolm",
    description: "Book Shelia Malcolm for your next event. International bestselling author and award-winning Toastmaster delivering transformational messages.",
    url: 'https://lookwithinlifecoaching.com/speaking-events',
    type: 'website',
    images: [
      {
        url: 'https://lookwithinlifecoaching.com/og-speaking-events.jpg',
        width: 1200,
        height: 630,
        alt: 'Shelia Malcolm Speaking Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Speaking Events | Keynote Speaker Shelia Malcolm",
    description: "Book Shelia Malcolm for your next event. International bestselling author and award-winning Toastmaster.",
    images: ['https://lookwithinlifecoaching.com/og-speaking-events.jpg'],
  },
};

export default function SpeakingEvents() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroWrapperSubpage}>
        <div className={styles.heroSubpage}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Speaking Events & Workshops
            </h1>
            <p className={styles.heroDescription}>
              Inspire, educate, and transform your audience with powerful keynote presentations and
              interactive workshops. Shelia Malcolm brings years of experience and transformational
              insights to every speaking engagement.
            </p>
            <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Book Shelia
            </a>
          </div>
          <div className={styles.heroImage}>
            {/* Placeholder for speaking events image */}
          </div>
        </div>
      </section>

      {/* Public Speaking Section */}
      <section id="speaking" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Public Speaking</h2>
          <p className={styles.sectionDescription}>
            Transformational messages that inspire action and lasting change
          </p>
          <div className={styles.coachingGrid}>
            <div className={styles.coachingItem}>
              <p className={styles.coachingItemDescription}>
                Shelia Malcolm is an International Bestselling Author and an award-winning Toastmaster.
                She provides one-on-one coaching, for clients who need help on upcoming presentations or
                public speaking events. Click the link below to book her as a keynote speaker for your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className={styles.additionalCoaching}>
        <div className={styles.additionalCoachingContainer}>
          <h2 className={styles.sectionTitle}>Watch Shelia in Action</h2>
          <p className={styles.sectionDescription}>
            See Shelia&apos;s speaking style and impact
          </p>
          <VideoGallery />
        </div>
      </section>

      {/* Booking Information Section */}
      <section id="booking" className={styles.helpYouSection}>
        <div className={styles.helpYouContainer}>
          <h2 className={styles.sectionTitle}>Book Shelia</h2>
          <a href="https://calendly.com/lookwithinlifecoach" target="_blank" rel="noopener noreferrer" className={styles.helpYouButton}>
            Schedule Booking Consultation
          </a>
        </div>
      </section>

      {/* Chat Icon */}
      <ChatIcon />
    </div>
  );
}

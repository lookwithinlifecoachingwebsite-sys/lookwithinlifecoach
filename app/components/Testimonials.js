'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import Modal from './Modal';

const testimonials = [
  {
    id: 1,
    text: "Coach Shelia has been a light in many different aspects of my life: helping me fight off procrastination and manage my time better, learn what I want in a dating relationship and not settle for less, and find gratitude in the small things. She provides a safe space where I feel comfortable sharing anything and shares tactics I can apply (and encouraging texts throughout the week to check in and keep me on track). 5/5 stars",
    name: "Samantha",
    location: "Georgia"
  },
  {
    id: 2,
    text: "There was a time in my life when I felt like I was drowning and struggled to see my life differently. But Shelia helped me find the strength to talk about it. She helped me discover the new life I needed and wanted. She continuously reminds me of the strength I have within myself. Without her support, guidance, and encouragement only God knows where I would be. Thank you Shelia for all you've done for me and my family",
    name: "Jane",
    location: "Scotland"
  },
  {
    id: 3,
    text: "I hired Shelia from Look Within Life Coaching to help deepen my non-profit's relationship with its 72,000 international members. I consider Shelia a powerful ally in helping Non-profit and for-profit corporations empower their employees. Her authenticity puts people at ease and her words transform mindsets. I strongly recommend her Life Coaching services to any company with employees",
    name: "Pocket Church Ministries"
  },
  {
    id: 4,
    text: "It helped me with my time management, it helped me with the relationships that were important to me. It help me identify what I needed to do to have a profitable and productive day every time I wake up. That class was so amazing. She challenged us to take away nuggets, to identify the people that was influential to us, and it was Amazing!",
    name: "Shamika W.",
    location: "Jacksonville, Fl"
  },
  {
    id: 5,
    text: "It was a pleasure to see you at AY. I want to thank you for coming and sharing your experiences you have faced to get you to where you're now. I have to say, I'm amazed at how powerful you delivered your presentation. It takes a courageous person to do what you're doing. I look at you up there and I saw a woman who defies the status quo, with you smile and a voice of resolved wisdom. You showed no boundaries, and that made me comfortable. Your questions, and how you answered each individual, showed that you listened very well, and you showed you genuinely cared. Overall, you accomplished your segment, and you showed no weakness in your delivery. Thank you for coming by cwc, and I'll be following your good works.",
    name: "John",
    location: "Queens, NY"
  },
  {
    id: 6,
    text: "I started watching your videos this week. I'm going back looking at your previous ones. I'm late but its all part of God's timing. You are speaking the exact words that God has given me in this season while I am waiting and growing. I'm creating my vision board this week. I'm very excited about that. Have a blessed day and thank you!",
    name: "Joelle",
    location: "Jacksonville, Fl"
  },
  {
    id: 7,
    text: "Firstly I want to thank you so much so sharing your book with me, I've started it yesterday on my way home from work and it has really touched me already. I am that girl that you speak about always making everyone smile or person would ask me how I keep a smile on my face everyday with so much going on around me. But deep down I've been thru a lot abuse physically and emotionally even by family members and I was a church girl too, I felt no one understood me so I don't speak of my past. But I always aspire to write my book, but was afraid of letting everyone know my truth but your book has given me light to write my own.",
    name: "Natasha",
    location: "Jamaica"
  },
  {
    id: 8,
    text: "Thank God for His abundant blessings & grace for keeping me resilient & consistent till I finish my my Master Program successfully in August 31st 2020. I would like to inform dear Shelia Malcolm about this achievement as it wouldn't be possible without reading your amazing book: Free Me From ME \"chains were meant to be broken\". Indeed I put your theory into practice including being compassionate, resilient, leadership & services my beloved Australian community with humility. Further, my dear coach I'm so grateful for your generosity & your breadth wealth of knowledge in the book because it helps me a lot to dedicated to my career which I have gained through patient, responsibilities and resilient. It was truely amazing book, it keep me to be open minded & focused always. Today I have broken the bondage I was in and now I can fly free with great wisdom and freedom to serve humanity with humility. In doing so, I believe that coming out from the big box is warranted. Free at last \"chains were meant to broken\". I have broken the bondage because I come from village to privilege today to be amongst one of the most Australian prestigious University graduates. Thank Gracious God for his unconditional love to me as His humble child. I made it in Jesus Christ Wonderful Name Amen",
    name: "Okwom",
    location: "Australia"
  },
  {
    id: 9,
    text: "I believe that it's not an accident to know you, when I first time see you on live, all the words that you shared was all I need to hear. I always remember you told me to start. Now I'm happy and grateful who I am now because you inspired and motivate me to start what I want to do.",
    name: "Roze Charm",
    location: "Singapore"
  }
];


export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = testimonials.length;

    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  const handleCardClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <>
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionDescription}>
            Hear from individuals who have transformed their lives through our coaching programs.
          </p>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {testimonials.map((testimonial, index) => {
                const position = getCardPosition(index);
                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 2;
                const displayName = testimonial.location 
                  ? `${testimonial.name}, ${testimonial.location}`
                  : testimonial.name;

                return (
                  <div
                    key={testimonial.id}
                    className={`${styles.testimonialCard} ${isActive ? styles.active : ''} ${!isVisible ? styles.hidden : ''} ${styles.clickable}`}
                    style={{
                      transform: `translateX(${position * 95}%) scale(${isActive ? 1 : 0.7})`,
                      zIndex: isActive ? 10 : 5 - Math.abs(position),
                      opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    }}
                    onClick={() => isActive && handleCardClick(testimonial)}
                  >
                    <div className={styles.testimonialQuote}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M10 20C10 15.5817 13.5817 12 18 12V8C11.3726 8 6 13.3726 6 20H10ZM24 20C24 15.5817 27.5817 12 32 12V8C25.3726 8 20 13.3726 20 20H24Z" fill="#d1d1d1"/>
                      </svg>
                    </div>
                    <p className={styles.testimonialText}>
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className={styles.testimonialAuthor}>
                      <h4 className={styles.authorName}>{displayName}</h4>
                    </div>
                    {isActive && (
                      <div className={styles.readMoreHint}>Click to read more</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedTestimonial ? (selectedTestimonial.location ? `${selectedTestimonial.name}, ${selectedTestimonial.location}` : selectedTestimonial.name) : ''}
      >
        {selectedTestimonial && (
          <div className={styles.modalTestimonial}>
            <div className={styles.modalQuote}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 20C10 15.5817 13.5817 12 18 12V8C11.3726 8 6 13.3726 6 20H10ZM24 20C24 15.5817 27.5817 12 32 12V8C25.3726 8 20 13.3726 20 20H24Z" fill="#d1d1d1"/>
              </svg>
            </div>
            <p className={styles.modalText}>&quot;{selectedTestimonial.text}&quot;</p>
          </div>
        )}
      </Modal>
    </>
  );
}

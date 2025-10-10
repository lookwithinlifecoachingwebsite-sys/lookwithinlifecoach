'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ChatIcon.module.css';

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const chatRef = useRef(null);

  // EmailJS configuration
  const SERVICE_ID = 'service_95bo1rb';
  const TEMPLATE_ID = 'template_4v9in6i';
  const PUBLIC_KEY = 'XVUAsuYn0r4PMrFXf';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() && name.trim() && email.trim()) {
      setIsSending(true);

      try {
        // Send email using EmailJS
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: name,
            email: email,
            message: message,
          },
          PUBLIC_KEY
        );

        // Success - show confirmation and close
        alert('Message sent successfully! We\'ll get back to you soon.');
        setMessage('');
        setName('');
        setEmail('');
        setIsOpen(false);
        setShowForm(true);
      } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSending(false);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatContainer} ref={chatRef}>
      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Chat with us</h3>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.welcomeMessage}>
              <p>Hi there! 👋</p>
              <p>How can we help you today?</p>
            </div>
            <div className={styles.formContainer}>
              <input
                type="text"
                placeholder="Your name"
                className={styles.formInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your email"
                className={styles.formInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Type your message..."
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="4"
              />
            </div>
          </div>
          <div className={styles.chatFooter}>
            <button
              className={styles.sendButton}
              onClick={handleSendMessage}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        className={styles.chatButton}
        onClick={handleToggle}
        aria-label="Toggle chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}

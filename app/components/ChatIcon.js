'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatIcon.module.css';

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const chatRef = useRef(null);

  // Replace with your WhatsApp number (include country code, no + or spaces)
  // Example: for +1 234-567-8900, use: 12345678900
  const whatsappNumber = '15615425658'; // REPLACE THIS WITH YOUR ACTUAL NUMBER

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

  const handleSendMessage = () => {
    if (message.trim()) {
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      // Clear the message and close chat
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
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
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Type your message..."
              className={styles.chatInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
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

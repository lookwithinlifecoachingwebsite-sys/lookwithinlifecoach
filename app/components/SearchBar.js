'use client';

import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission here
    const searchValue = e.target.search.value;
    console.log('Search:', searchValue);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className={`${styles.searchInput} ${isExpanded ? styles.expanded : ''}`}
        />
        <button
          type="button"
          onClick={handleToggle}
          className={styles.searchButton}
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </form>
    </div>
  );
}

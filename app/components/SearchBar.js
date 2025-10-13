'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { searchContent } from '../utils/searchIndex';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setQuery('');
        setResults([]);
        setSelectedIndex(-1);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Focus input when expanding
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (value.trim().length >= 2) {
      const searchResults = searchContent(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (result) => {
    setIsExpanded(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);

    const scrollToElement = (hash) => {
      const element = document.querySelector(hash);
      if (element) {
        // Calculate position to center the element on screen
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
      }
    };

    // If we're on the same page, just scroll to the section
    const currentPath = window.location.pathname;
    if (currentPath === result.path && result.hash) {
      scrollToElement(result.hash);
    } else {
      // Navigate to the page, and if there's a hash, scroll after navigation
      if (result.hash) {
        router.push(`${result.path}${result.hash}`);
        // Wait for navigation and then scroll
        setTimeout(() => {
          scrollToElement(result.hash);
        }, 500);
      } else {
        router.push(result.path);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleResultClick(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
      setQuery('');
      setResults([]);
      setSelectedIndex(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && selectedIndex < results.length) {
      handleResultClick(results[selectedIndex]);
    } else if (results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
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

      {/* Search Results Dropdown */}
      {isExpanded && results.length > 0 && (
        <div className={styles.searchResults}>
          {results.map((result, index) => (
            <div
              key={index}
              className={`${styles.searchResultItem} ${
                index === selectedIndex ? styles.selected : ''
              }`}
              onClick={() => handleResultClick(result)}
            >
              <div className={styles.resultTitle}>{result.title}</div>
              <div className={styles.resultMeta}>
                {result.section && (
                  <span className={styles.resultSection}>{result.section}</span>
                )}
                <span className={styles.resultPath}>
                  {result.path === '/' ? 'Home' : result.path.replace('/', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isExpanded && query.trim().length >= 2 && results.length === 0 && (
        <div className={styles.searchResults}>
          <div className={styles.noResults}>
            No results found for &quot;{query}&quot;
          </div>
        </div>
      )}
    </div>
  );
}

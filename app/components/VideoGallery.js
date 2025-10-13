'use client';

import { useState } from 'react';
import styles from './VideoGallery.module.css';

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      videoId: 'VIDEO_ID_1',
      title: 'Speaking Engagement 1',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/mqdefault.jpg'
    },
    {
      videoId: 'VIDEO_ID_2',
      title: 'Speaking Engagement 2',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/mqdefault.jpg'
    },
    {
      videoId: 'VIDEO_ID_3',
      title: 'Speaking Engagement 3',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_3/mqdefault.jpg'
    },
    {
      videoId: 'VIDEO_ID_4',
      title: 'Speaking Engagement 4',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_4/mqdefault.jpg'
    },
    {
      videoId: 'VIDEO_ID_5',
      title: 'Speaking Engagement 5',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_5/mqdefault.jpg'
    },
  ];

  return (
    <div className={styles.galleryContainer}>
      {/* Main Video Player */}
      <div className={styles.mainVideoWrapper}>
        <div className={styles.videoPlayer}>
          <iframe
            src={`https://www.youtube.com/embed/${videos[currentVideo].videoId}`}
            title={videos[currentVideo].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className={styles.videoTitle}>{videos[currentVideo].title}</h3>
      </div>

      {/* Thumbnail List */}
      <div className={styles.thumbnailList}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`${styles.thumbnailItem} ${index === currentVideo ? styles.activeThumbnail : ''}`}
            onClick={() => setCurrentVideo(index)}
          >
            <div className={styles.thumbnailWrapper}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles.thumbnailImage}
              />
              {index === currentVideo && (
                <div className={styles.playingIndicator}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
            </div>
            <div className={styles.thumbnailInfo}>
              <p className={styles.thumbnailTitle}>{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

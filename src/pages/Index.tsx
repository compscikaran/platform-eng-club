
import React, { useEffect, useState } from 'react';
import { videos } from '../data/platformEngineeringVideos';
import VideoCard from '../components/VideoCard';
import ProgressBar from '../components/ProgressBar';

const WATCHED_VIDEOS_KEY = 'platform-engineering-watched-videos';

const Index = () => {
  const [watchedVideos, setWatchedVideos] = useState<string[]>(() => {
    const saved = localStorage.getItem(WATCHED_VIDEOS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(WATCHED_VIDEOS_KEY, JSON.stringify(watchedVideos));
  }, [watchedVideos]);

  const toggleVideoWatched = (videoId: string) => {
    setWatchedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  return (
    <div className="min-h-screen bg-[#38b6ff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ffffff] mb-4">
            Platform Engineering Learning Path
          </h1>
          <p className="text-lg text-white/90">
            Master the essentials of Platform Engineering and Internal Developer Platforms
          </p>
        </div>

        <ProgressBar completed={watchedVideos.length} total={videos.length} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {videos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              isWatched={watchedVideos.includes(video.id)}
              onToggleWatched={() => toggleVideoWatched(video.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;


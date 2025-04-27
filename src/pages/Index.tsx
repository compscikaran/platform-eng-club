import React, { useEffect, useState } from 'react';
import { videos } from '../data/platformEngineeringVideos';
import VideoCard from '../components/VideoCard';
import ProgressBar from '../components/ProgressBar';
import Footer from '../components/Footer';
import ReactConfetti from 'react-confetti';
import { toast } from "sonner";

const WATCHED_VIDEOS_KEY = 'platform-engineering-watched-videos';

const Index = () => {
  const [watchedVideos, setWatchedVideos] = useState<string[]>(() => {
    const saved = localStorage.getItem(WATCHED_VIDEOS_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem(WATCHED_VIDEOS_KEY, JSON.stringify(watchedVideos));
    
    if (watchedVideos.length === videos.length) {
      setShowConfetti(true);
      toast("🎉 Congratulations! You've completed all videos!");
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    }
  }, [watchedVideos]);

  const toggleVideoWatched = (videoId: string) => {
    setWatchedVideos(prev => prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      {showConfetti && <ReactConfetti />}
      <div className="max-w-7xl mx-auto flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#38b6ff] mb-4">Platform Engineering</h1>
          <p className="text-lg text-gray-600 text-left">Our mission is to help engineers build developer platforms. We focus on building platforms that are adored by users, flourish organically not due to mandates, are a breeze to operate. 
I am engineer working on building a data platform used by data scientists and analysts to build reporting solutions. 
Below is a list of curated talks which have helped me understand how a platform which caters to a technical audience is built and operated.

        </p>
        </div>

        <ProgressBar completed={watchedVideos.length} total={videos.length} />

        <div className="flex flex-col items-center gap-8">
          {videos.map(video => <VideoCard key={video.id} video={video} isWatched={watchedVideos.includes(video.id)} onToggleWatched={() => toggleVideoWatched(video.id)} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

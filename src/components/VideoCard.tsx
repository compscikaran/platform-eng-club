
import React from 'react';
import { Video } from '../types/video';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  isWatched: boolean;
  onToggleWatched: () => void;
}

const VideoCard = ({ video, isWatched, onToggleWatched }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
          <button
            onClick={onToggleWatched}
            className={cn(
              "p-2 rounded-full transition-colors",
              isWatched ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            )}
          >
            <Check className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 text-sm">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;

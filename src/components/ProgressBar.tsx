
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar = ({ completed, total }: ProgressBarProps) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-medium text-gray-700">{completed} of {total} videos completed</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#38b6ff] h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

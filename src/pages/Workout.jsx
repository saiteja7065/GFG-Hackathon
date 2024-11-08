import React, { useState } from 'react';

const workouts = [
  { id: 1, name: 'Full Body Workout', duration: '30 minutes', videoUrl: 'https://path_to_video.mp4' },
  { id: 2, name: 'Yoga for Beginners', duration: '45 minutes', videoUrl: 'https://path_to_video.mp4' },
];

function WorkoutSessions() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <div className="grid grid-cols-1 gap-4">
        {workouts.map(workout => (
          <div 
            key={workout.id} 
            className="border rounded-md p-4 hover:shadow-lg cursor-pointer" 
            onClick={() => handleVideoClick(workout.videoUrl)}
          >
            <h3 className="text-xl font-semibold">{workout.name}</h3>
            <p className="text-sm">{workout.duration}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-4 rounded-lg relative">
            <button onClick={handleCloseVideo} className="absolute top-2 right-2 text-black text-xl">&times;</button>
            <h3 className="text-xl font-semibold mb-2">Workout Video</h3>
            <video controls className="w-full">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkoutSessions;

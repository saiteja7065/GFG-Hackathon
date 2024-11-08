import React, { useRef, useState } from 'react';

// Simple Modal component
function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <button onClick={onClose} className="mb-2 text-red-500">Close</button>
        {children}
      </div>
    </div>
  );
}

function FoodScanner() {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  // Start the camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
      alert("Please allow camera access.");
    }
  };

  // Capture the current frame from the video feed
  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0);
    setImage(canvas.toDataURL('image/png'));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Start Camera Button */}
      <button onClick={() => { setShowCamera(true); startCamera(); }} className="bg-green-500 text-white px-4 py-2 rounded-md">
        Start Camera
      </button>

      {/* Display Captured Image and Dummy Data */}
      {image && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Captured Image:</h3>
          <img src={image} alt="Captured Food" className="border rounded-md mt-2 w-full max-w-md" />
          <div className="mt-4">
            <h4 className="font-bold">Data:</h4>
            <p>Nutrition Facts: 200 calories</p>
            <p>Protein: 10g</p>
            <p>Carbohydrates: 30g</p>
            <p>Fat: 5g</p>
          </div>
        </div>
      )}

      {/* Modal for Camera */}
      {showCamera && (
        <Modal onClose={() => setShowCamera(false)}>
          <h3 className="text-lg font-bold">Camera</h3>
          {/* Video Element */}
          <div className="w-full max-w-md">
            <video ref={videoRef} autoPlay playsInline className="border rounded-md w-full h-auto" />
          </div>

          {/* Capture Image Button */}
          <button onClick={captureImage} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Capture Image
          </button>
        </Modal>
      )}
    </div>
  );
}

export default FoodScanner;

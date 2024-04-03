import React, { useState, useRef } from 'react';

const TrackingASL = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <div>
      <h2>Tracking ASL</h2>
      <div>
        <button onClick={startCamera}>Start Camera</button>
        <button onClick={stopCamera}>Stop Camera</button>
      </div>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', maxWidth: '500px' }} />
    </div>
  );
};

export default TrackingASL;

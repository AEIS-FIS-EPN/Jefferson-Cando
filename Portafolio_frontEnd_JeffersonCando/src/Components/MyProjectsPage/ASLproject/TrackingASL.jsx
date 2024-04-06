import React, { useState, useRef } from 'react';
import axios from 'axios';
import DetectionBoxOverlay from './DetectionBoxOverlay';

const TrackingASL = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [detectionInfo, setDetectionInfo] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendInterval, setSendInterval] = useState(null);

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
      stopSending();
    }
  };

  const startSending = () => {
    if (!isSending) {
      const intervalId = setInterval(sendFrameToBackend, 1000);
      setSendInterval(intervalId);
      setIsSending(true);
    }
  };

  const stopSending = () => {
    if (isSending) {
      clearInterval(sendInterval);
      setIsSending(false);
    }
  };

  const sendFrameToBackend = async () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0);

      const imageData = canvas.toDataURL('image/jpeg');
      const response = await axios.post('http://192.168.1.3:5000/api/upload_video', { video: imageData });
      setDetectionInfo(response.data); // Set detection info from backend response
    } catch (error) {
      console.error('Error sending video to backend:', error);
    }
  };

  const renderDetectionBox = () => {
    if (detectionInfo && detectionInfo.detections) {
      const { x1, y1, x2, y2 } = detectionInfo.cord;
      return (
        <div
          style={{
            position: 'absolute',
            border: '2px solid red',
            left: x1,
            top: y1,
            width: x2 - x1,
            height: y2 - y1,
            zIndex: 999,
          }}
        >
          <p style={{ margin: 0, background: 'red', color: 'white' }}>
            {detectionInfo.class_name}
          </p>
        </div>
      );
    }
    return null;
  };

  console.log('Detection Info:', detectionInfo);

  return (
    <div>
      <h2>Tracking ASL</h2>
      <div>
        <button onClick={startCamera}>Start Camera</button>
        <button onClick={stopCamera}>Stop Camera</button>
        {isSending ? (
          <button onClick={stopSending}>Stop Sending</button>
        ) : (
          <button onClick={startSending}>Start Sending</button>
        )}
      </div>
      {/* <div style={{ position: 'relative' }}>
        <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', maxWidth: '500px' }} />
        {renderDetectionBox()} 
      </div> */}
      <div style={{ position: 'relative' }}>
        <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', maxWidth: '500px' }} />
        {renderDetectionBox()} 
      </div>
    </div>
  );
};

export default TrackingASL;

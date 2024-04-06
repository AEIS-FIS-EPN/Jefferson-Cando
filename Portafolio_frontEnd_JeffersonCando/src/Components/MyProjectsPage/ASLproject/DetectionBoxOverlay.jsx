import React from 'react';

const DetectionBoxOverlay = ({ detectionInfo }) => {
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

export default DetectionBoxOverlay;

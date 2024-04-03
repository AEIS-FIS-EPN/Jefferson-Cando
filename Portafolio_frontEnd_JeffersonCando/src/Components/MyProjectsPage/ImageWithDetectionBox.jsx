
import "./ImageWithDetectionBox.css"
import React from "react";

function ImageWithDetectionBox({ imageURL, detectionInfo, handleUpload }) {
  const renderDetectionBox = () => {
    if (detectionInfo && detectionInfo.detections) {
      const { x1, y1, x2, y2 } = detectionInfo.cord;
      return (
        <div
          style={{
            position: "absolute",
            border: "2px solid red",
            left: x1,
            top: y1,
            width: x2 - x1,
            height: y2 - y1,
            zIndex: 1,
          }}
        >
          <p style={{ margin: 0, background: "red", color: "white" }}>
            {detectionInfo.class_name}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "relative" }}>
        <img src={imageURL} alt="Imagen cargada" />
        {renderDetectionBox()}
      </div>
      {/* Contenedor para alinear el botón en la esquina inferior derecha */}
      <div style={{ position: "absolute", bottom: 0, right: 0 }}>
        {/* Botón de subir */}
        <button onClick={handleUpload} className="btn btn-primary upload-button">
          Subir
        </button>
      </div>
    </div>
  );
}

export default ImageWithDetectionBox;

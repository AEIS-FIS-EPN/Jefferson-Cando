import React, { useState } from "react";
import axios from "axios";
import ImageWithDetectionBox from "./ImageWithDetectionBox";
import "./ASLproject.css";
import TrackingASL from "./TrackingASL";

function ASLproject() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [detectionInfo, setDetectionInfo] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const fileURL = URL.createObjectURL(event.target.files[0]);
    setImageURL(fileURL);
    setShowUploadButton(true);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1];
        const jsonData = { image: base64Data };

        axios
          .post("http://127.0.0.1:5000/api/upload_image", jsonData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.detections) {
              console.log("La imagen fue detectada correctamente");
              setDetectionInfo(response.data);
            } else {
              console.log("No se detectó ninguna imagen");
              setDetectionInfo(null);
            }
          })
          .catch((error) => {
            console.error("Error al subir la imagen:", error);
          });
      };
    }
  };

  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Subir Imagen</h1>
          <input type="file" onChange={handleFileChange} />
          {imageURL && (
            <ImageWithDetectionBox
              imageURL={imageURL}
              detectionInfo={detectionInfo}
              handleUpload={handleUpload} // Pasamos la función de manejo de subida como prop
            />
          )}
        </div>
        <TrackingASL />
      </div>
    </div>
  );
}

export default ASLproject;

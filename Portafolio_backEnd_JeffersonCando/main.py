from flask import Flask, request,  jsonify
from flask_cors import CORS
import base64
import numpy as np
import cv2 as cv
from modules.handle_model import detectarASL
app = Flask(__name__)
CORS(app)


@app.route('/api/upload_image', methods=['POST'])
def upload_image():
    # Obtener la imagen en formato base64 desde el cuerpo de la solicitud
    image_data = request.json.get('image')

    if image_data:
        decoded_image = base64.b64decode(image_data)
        image_np = np.frombuffer(decoded_image, dtype=np.uint8)
        image_cv2 = cv.imdecode(image_np, cv.IMREAD_COLOR)
        detectar = detectarASL(image_cv2)
        detectar.results()
        if(detectar.detections):
            x1, y1, x2, y2 = map(float, detectar.coordinates[0])
            response_data = {
                'detections': True,
                'cord': {"x1": x1, "x2": x2, "y1": y1, "y2": y2},
                'class_name': detectar.name_class
            }

            print("Imagen recibida correctamente.")
            return jsonify(response_data), 200
        else:
            response_data = {
                'detections': False
            }
             
            return jsonify(response_data), 200
    else:
        # Mostrar un mensaje de error si no se recibe la imagen
        print("Error: No se recibió ninguna imagen.")
        return "Error: No se recibió ninguna imagen.", 400


@app.route('/api/upload_video', methods=['POST'])
def upload_video():
    # Obtener el video en formato base64 desde el cuerpo de la solicitud
    video_data = request.json.get('video')

    if video_data:
        # Decodificar el video y convertirlo en un array numpy
        decoded_video = base64.b64decode(video_data.split(',')[1])
        video_np = np.frombuffer(decoded_video, dtype=np.uint8)
        # Decodificar el video en un objeto de video
        video_cv2_frame = cv.imdecode(video_np, cv.IMREAD_COLOR)

        detectar = detectarASL(video_cv2_frame)
        detectar.results()
        if(detectar.detections):
            x1, y1, x2, y2 = map(float, detectar.coordinates[0])
            response_data = {
                'detections': True,
                'cord': {"x1": x1, "x2": x2, "y1": y1, "y2": y2},
                'class_name': detectar.name_class
            }

            print("Imagen recibida correctamente.")
            return jsonify(response_data), 200
        else:
            response_data = {
                'detections': False
            }
             
            return jsonify(response_data), 200
    else:
        # Mostrar un mensaje de error si no se recibe el video

        print("NO NO NOSe recivio vide")
        return "Error: No se recibió ningún video.", 400

if __name__ == '__main__':
    #app.run(debug=True)
    app.run(host='0.0.0.0', debug=True)

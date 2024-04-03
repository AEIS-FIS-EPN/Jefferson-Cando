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

if __name__ == '__main__':
    app.run(debug=True)

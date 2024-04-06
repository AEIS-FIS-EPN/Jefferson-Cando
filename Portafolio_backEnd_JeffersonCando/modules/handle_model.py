from ultralytics import YOLO
import os
import errno
import cv2
import numpy as np
import base64
class detectarASL:
    def loadModel(self):
        parent_dir = os.getcwd()
        print(parent_dir)
        path_model = os.path.join(parent_dir,'resources/models','ASL_100epoch_only_letters.pt')
        model = YOLO(path_model)
        return model
    
    def __init__(self,imagen_cv2):
        self.imagen=imagen_cv2
        self.model=self.loadModel()
        self.clas= None
        self.name_class=None
        self.classes= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        self.detections=False
        self.coordinates=None


    def predict(self,image_cedula):
        results = self.model(image_cedula,conf=0.5,imgsz=640)
        return results 
    
    def results(self):
        resultados=self.predict(self.imagen)
        for r in resultados:
            boxes=r.boxes
            conf=boxes.conf
            print("Miremos el confidents", conf)  
            box=boxes.xyxy
            coord=box.numpy()
            print("\nCoordenadas!!!",coord)
            if (boxes):
                print("boxes",boxes.cls)
                cls=boxes.cls
                print(type(cls))
                self.clas=int(cls[0].item())
                self.name_class=self.classes[self.clas]
                print("Name of class",self.name_class)
                self.detections=True
                self.coordinates=coord
            else:
                print("No se detecto")





        

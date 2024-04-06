# Usa la última versión de Alpine como base
FROM alpine:latest

# Instala Python 3.9.2
RUN apk add --no-cache python3


# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo requirements.txt al directorio de trabajo
COPY requirements.txt .

# Instala los paquetes Python requeridos
RUN pip3 install --no-cache-dir -r requirements.txt

# Copia el contenido del backend a /app en el contenedor
COPY . .

# Excluye el archivo 'environment' del contenedor
RUN rm -f environment

# Especifica el comando por defecto para ejecutar la aplicación
CMD ["python3", "main.py"]

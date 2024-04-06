FROM ubuntu:20.04

# Configura el entorno para que no se requiera interacción durante la instalación de paquetes
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Ecuador

# Actualiza e instala los paquetes necesarios
RUN apt-get update && apt-get install -y \
    python3.9 \
    python3.9-dev \
    python3-pip \
    build-essential \
    libx11-dev \
    nginx \
    vim \
    tar \
    make \
    g++ \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libglib2.0-0 \
    libgl1-mesa-glx \
    uwsgi-plugin-python3 \
    wget \
    unzip \
    imagemagick \
    nano

# Configura Python 3.9 como la versión predeterminada
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 1
RUN update-alternatives --set python3 /usr/bin/python3.9

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


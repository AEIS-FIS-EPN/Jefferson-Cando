

# Portfolio Overview

Welcome to my portfolio! Here, you'll find a showcase of my skills and projects in both frontend and backend development.

## Frontend

The frontend of this portfolio presents information about me, my experiences, and my areas of expertise. It's crafted using React.js and styled with CSS to deliver a clean and responsive user interface.

## Backend

The backend of this portfolio, developed with Python, serves as the backend service accessed by the frontend to utilize the machine learning model. It handles requests from the frontend and processes data to provide insights or perform actions based on user interactions.

## Future Developments

Looking ahead, our goal is to directly load the machine learning model into the browser or frontend. This will enhance performance and reduce reliance on backend services, thereby providing a smoother user experience.

## Get Started

To explore the portfolio, follow these steps:

1. Clone the repository:

git clone https://github.com/AEIS-FIS-EPN/Jefferson-Cando.git

2. Navigate to the cloned repository directory:
```
cd Jefferson-Cando
```



3. Install dependencies for the frontend:
```
cd Portafolio_frontEnd_JeffersonCando
npm install
```

4. Run the frontend server:

```
npm run dev
```

For the backend, you have two options:


- **Docker Image**: Download the Docker image from [here](https://epnecuador-my.sharepoint.com/:u:/g/personal/jefferson_cando01_epn_edu_ec/EXhFBnfl40dHracdBH2yPvYBjZswbVQtztwEPyD3jGWndA?e=Lf6elZ):

when the dowload finish, go to the folder where the docker image is, and run the next comands
in linux, may you have to use sudo.
- Load the docker image:
  ```
  docker load -i backend_portafolio_v1_0.tar
  ```
- Create the container and configure the ports:
  ```
  docker run -d -p 5000:5000 backend_portafolio:v1.0
  ```
  
  now you have the backend upset, other option is run with enviroments of python

- **Local Setup**: The backend is made with python9.3

- Create a virtual environment
If you are using linux, you can create a enviroment with the next comand
```
python -m venv name_env
```
next, activate the enviroment with:
```
source /name_env/bin/activate
```

If you are using windows, you can create enviroment with conda:
```
conda create -n nombre_entorno
```
next you have to activate the enviroment:
```
source activate -- nombre_entorno
```

After thar, you have to enter to the Portafolio_backEnd_JeffersonCando directory, here you will find the requerimentes.txt

- Install required dependencies:
  ```
  pip install -r requirements.txt
  ```
- Run the backend server:
  ```
  python main.py
  ```

## Contact


Feel free to reach out to me via email at jefferson.cando01@epn.edu.ec or connect with me on [LinkedIn](www.linkedin.com/in/jefferson-cando-790a38125).

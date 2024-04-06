markdown

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

css


2. Navigate to the cloned repository directory:

cd Jefferson-Cando

markdown


3. Install dependencies for the frontend:

cd Portafolio_frontEnd_JeffersonCando
npm install

markdown


4. Run the frontend server:

npm run dev

less


For the backend, you have two options:

- **Docker Image**: Download the Docker image from [here](https://epnecuador-my.sharepoint.com/:u:/g/personal/jefferson_cando01_epn_edu_ec/EXhFBnfl40dHracdBH2yPvYBjZswbVQtztwEPyD3jGWndA?e=Lf6elZ):
- Load the docker image:
  ```
  docker load -i backend_portafolio_v1_0.tar
  ```
- Create the container and configure the ports:
  ```
  docker run -d -p 5000:5000 backend_portafolio:v1.0
  ```

- **Local Setup**:
- Create a virtual environment.
- Install required dependencies:
  ```
  pip install -r requirements.txt
  ```
- Run the backend server:
  ```
  python main.py
  ```

## Contact

Feel free to reach out to me via email at jefferson@example.com or connect with me on [Linked

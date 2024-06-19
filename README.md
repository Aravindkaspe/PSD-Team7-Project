# The 3D Craft House

The 3D Craft House is a website designed to promote and shop environmentally friendly 3D sculptures. Our mission is to provide a platform where individuals can explore sustainable 3D crafting practices while engaging in commerce to buy eco-conscious 3D crafting products.

## Features

1. Homepage
Provides an overview of the company's mission and values.
Highlights the importance of environmentally friendly 3D sculpting practices.
Showcases featured products and recent projects.
2. Booking Page
Allows clients to schedule big projects with the company.
Provides a convenient booking system for discussing custom projects and collaborations.
3. Shopping Cart
Enables users to purchase standard 3D sculpture models available on the site.
Seamless checkout process with secure payment options.


## Goals

The primary goal of this project is to create a visually appealing and user-friendly website that effectively communicates.
Promote Sustainable Practices: Educate visitors on the importance of sustainable 3D crafting and how it contributes to environmental conservation.
Facilitate Commerce: Provide a user-friendly platform for buying and selling eco-friendly 3D crafting products.
Knowledge Hub: Serve as a central repository of information on sustainable 3D crafting practices, technologies, and innovations.


## Installation

1. Clone the repository.
2. Installations of NodeJs: Install NodeJs v20/14.0 version from the below URL https://nodejs.org/en/download/prebuilt-installer 
3. Navigate to the Source directory.
4. Install dependencies with npm install.

## Run the application:

To run the project locally, follow these steps:

1. Before running the application, we need to make sure the both (backend and frontend) the directories are updated with necesary dependencies.
2. For this purpose go to the Backend directory in the project and run: npm install. The server will install necessary dependencies for backend Server.
3. After that, go to the Frontend directory in the project and run: npm install. The Server will install necessary dependencies for frontend Server.
4. Now, Start the application from Source directory by running the server: npm start.
5. This will run your application on port 3000.

## Run the testcases:
1. To run test cases for email service run command "npm run test:unit" in Source/backend directory.
2. To run test cases for frontend services run command "npm test" in Source/frontend/my-app directory. 

## Alternate way to run the application using docker

1. Install docker desktop from the below URL https://www.docker.com/products/docker-desktop/
2. Clone the project to your local using the command: git clone https://github.com/Aravindkaspe/PSD-Team7-Project.git 
3. Start the docker desktop and then navigate to your project directory where docker-compose.yml is located
4. Run "docker-compose build" command. This will create docker image to your local.
5. Run "docker-compose up" command. This will run the application on port 3000.
6. Instead, you can pull the image for frontend as "docker pull aravindkaspe/project_frontend:v1"
7. Also, for backend as "docker pull aravindkaspe/project_backend:v1"
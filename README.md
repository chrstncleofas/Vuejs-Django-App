# Vuejs-Django-App

Simple Employee Management Portal made by Vuejs and Django (REST-API-FRAMEWORK)

## Overview

This project combines the power of Vue.js for the frontend and Django (Python) 
with the Django Rest Framework for the backend. The data is stored in a PostgreSQL 
database, and the project utilizes Poetry for package management.

### Folder Structure
- **backend:** Django backend for the project.
- **frontend:** Vue.js frontend for the project.

## Technologies Used
- Vue.js
- Django (Python)
- Django Rest Framework
- PostgreSQL
- Poetry Package Management

## Getting Started

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed.
- Install [Poetry](https://python-poetry.org/) for Python package management.
- Set up a PostgreSQL database.

### Installation
1. Clone the repository:
   ```bash
   [git clone https://github.com/your-username/your-repository.git](https://github.com/chrstncleofas/Vuejs-Django-App.git)
   cd your-repository

1. Install frontend dependencies:
   - cd frontend
   - npm install
2. Install backend dependencies:
   - cd ../backend
   - poetry install
3. Set up the database:
   - Create a PostgreSQL database.
   - Update the database configurations in the Django settings.
4. Apply migrations and start the backend server:
   - poetry run python manage.py migrate
   - poetry run python manage.py runserver
5. Start the frontend development server:
   - cd ../frontend
   - npm run serve

Feel free to customize the overview and other sections based on your project's specifics.

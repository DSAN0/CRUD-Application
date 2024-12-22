# CRUD Application with Search Engine

This is a full-stack **CRUD (Create, Read, Update, Delete)** application built using **React** for the frontend, **Python (Flask)** for the backend, and **MongoDB** for the database. The application includes a **search engine** feature, allowing users to easily filter and find records based on keywords.

The application is developed and tested using **VS Code** as the code editor.

## Features
- **Create**: Add new records to the database.
- **Read**: View existing records.
- **Update**: Edit records.
- **Delete**: Remove records from the database.
- **Search**: Filter and search for records based on keywords or criteria.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Python with Flask
- **Database**: MongoDB
- **Editor**: VS Code
- **Others**: Axios (for making HTTP requests), Bootstrap (for styling), MongoDB’s native text search feature

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community) or use a cloud database like MongoDB Atlas.
- [VS Code](https://code.visualstudio.com/) (or any other code editor of your choice).

### Backend Setup (Flask + MongoDB)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crud-application.git
   cd crud-application/backend

2. Create and activate a virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # For macOS/Linux
    venv\Scripts\activate     # For Windows

3. Install the backend dependencies:
    ```bash
    pip install -r requirements.txt

4. Set up MongoDB:

    If you're using a local MongoDB instance, make sure it's running.

    If you're using MongoDB Atlas, update the config.py file with your connection string.

6. Run the Flask backend server:
    ```bash
    python app.py

- The backend will be running on http://localhost:5000.

### Frontend Setup (React)

1. Install the frontend dependencies:
    ```bash
    npm install

2. Run the React development server:
    ```bash
    npm start
     
  - The frontend will be running on http://localhost:3000.

## API Endpoints
### The backend provides the following API endpoints:

- **GET /api/items:** Fetch all items from the database.
- **POST /api/items:** Create a new item.
- **PUT /api/items/:id:** Update an existing item.
- **DELETE /api/items/:id:** Delete an item.
- **GET /api/items/search?q=keyword:** Search for items based on the provided query parameter q. The search functionality uses MongoDB's text search feature to filter items by keywords.

## Search Engine Feature
The search engine allows you to filter records by a keyword. The search results are automatically updated as you type, providing a real-time search experience.

- To use the search, simply type a keyword in the search input field on the homepage. The app will filter the records based on the keyword and display the matching results.

#### Example of the search query:
    ```sql
    GET /api/items/search?q=example


## Usage
Once both the frontend and backend are running, navigate to http://localhost:3000 in your browser.

- **Create a new item:** Use the form to add a new record.
- **View all items:** The list of items will be displayed on the homepage.
- **Update an item:** Click on the item to edit it.
- **Delete an item:** Click the delete button next to the item to remove it.
- **Search for items:** Use the search bar to filter items based on keywords.


## Screenshots
![image alt](https://github.com/DSAN0/CRUD-Application/blob/be281c038301be94f9c378eac939b0c75f297846/Screenshot%202024-12-23%20044746.png)
![image alt](https://github.com/DSAN0/CRUD-Application/blob/d913d13ca3b037ac951717c38e295733043d6062/Screenshot%202024-12-23%20044819.png)
![image alt](https://github.com/DSAN0/CRUD-Application/blob/c68f9882b4cede0ca13d2c0d03a94c2b369bdeb8/Screenshot%202024-12-23%20044954.png)
![image alt](https://github.com/DSAN0/CRUD-Application/blob/6dc56f5a96ac600cc68861b79e2417514e688ef5/Screenshot%202024-12-23%20045014.png)

## Acknowledgments
- Create React App for bootstrapping the React app.
- Flask for creating the backend server.
- MongoDB for the database.
- MongoDB Text Search for implementing the search functionality.

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTrainee from './components/AddTrainee';
import TraineeList from './components/TraineeList';
import UpdateTrainee from './components/UpdateTrainee';

const App = () => {
  const [message, setMessage] = useState("");
  const [trainees, setTrainees] = useState([]);
  const [editingTrainee, setEditingTrainee] = useState(null);

  // Fetch message from Flask API
  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setMessage(response.data.message);
        setTrainees(response.data.data);  // Set the trainees list
      })
      .catch(error => {
        console.error("There was an error fetching data!", error);
      });
  }, []);
  
  const addTrainee = (trainee) => {
    setTrainees([...trainees, { ...trainee, id: trainees.length + 1 }]);
  };

  const deleteTrainee = (id) => {
    setTrainees(trainees.filter((trainee) => trainee.id !== id));
  };

  const startEditTrainee = (id) => {
    const traineeToEdit = trainees.find((trainee) => trainee.id === id);
    setEditingTrainee(traineeToEdit);
  };

  const updateTrainee = (id, updatedData) => {
    const updatedTrainees = trainees.map((trainee) =>
      trainee.id === id ? { ...trainee, ...updatedData } : trainee
    );
    setTrainees(updatedTrainees);
  };

  return (
    <Router>
      <div className="App">
        <nav className="p-4 bg-blue-500 text-white">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Add Trainee
              </Link>
            </li>
            <li>
              <Link to="/trainee-list" className="hover:text-gray-200">
                Trainee List
              </Link>
            </li>
          </ul>
        </nav>

        <h1>React and Flask Integration</h1>
        <p>{message}</p>

        <Routes>
          <Route
            path="/"
            element={<AddTrainee onAddTrainee={addTrainee} />}
          />
          <Route
            path="/trainee-list"
            element={
              <TraineeList
                trainees={trainees}
                onDeleteTrainee={deleteTrainee}
                onEditTrainee={startEditTrainee}
              />
            }
          />
          <Route
            path="/update/:id"
            element={
              editingTrainee && (
                <UpdateTrainee
                  trainee={editingTrainee}
                  onUpdateTrainee={updateTrainee}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

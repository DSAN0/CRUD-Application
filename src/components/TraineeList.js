import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TraineeList = ({ trainees, onDeleteTrainee, onEditTrainee }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter trainees based on the search query (only searching by name, address, mobile, nic, and email)
  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.nic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (traineeId) => {
    fetch(`http://localhost:5000/delete/${traineeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete trainee');
        }
        return response.json();
      })
      .then(() => {
        onDeleteTrainee(traineeId); // Update the state to remove the trainee
      })
      .catch((error) => {
        console.error('Error deleting trainee:', error);
      });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Trainee List</h1>

      {/* Search input */}
      <div className="mb-6 text-right">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, email, address, mobile, or NIC"
          className="border p-3 w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md"
        />
      </div>

      {/* Trainee list */}
      <ul className="space-y-4">
        {filteredTrainees.length > 0 ? (
          filteredTrainees.map((trainee) => (
            <li
              key={trainee.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
            >
              <div className="flex-1 space-y-4">
              <p className="text-xl font-semibold text-blue-600">Name: <span className="text-gray-800">{trainee.name}</span></p>
              <p className="text-xl font-semibold text-blue-600">Email: <span className="text-gray-800">{trainee.email}</span></p>
              <p className="text-xl font-semibold text-blue-600">Mobile: <span className="text-gray-800">{trainee.mobile}</span></p>
              <p className="text-xl font-semibold text-blue-600">Address: <span className="text-gray-800">{trainee.address}</span></p>
              <p className="text-xl font-semibold text-blue-600">NIC: <span className="text-gray-800">{trainee.nic}</span></p>
              <p className="text-xl font-semibold text-blue-600">Start Date: <span className="text-gray-800">{trainee.start_date}</span></p>
              <p className="text-xl font-semibold text-blue-600">End Date: <span className="text-gray-800">{trainee.end_date}</span></p>
              <p className="text-xl font-semibold text-blue-600">Institute: <span className="text-gray-800">{trainee.institute}</span></p>
              <p className="text-xl font-semibold text-blue-600">Languages Known: <span className="text-gray-800">{trainee.languages_known}</span></p>
              <p className="text-xl font-semibold text-blue-600">Field of Specialization: <span className="text-gray-800">{trainee.field_of_specialization}</span></p>
              <p className="text-xl font-semibold text-blue-600">Supervisor: <span className="text-gray-800">{trainee.supervisor}</span></p>
              <p className="text-xl font-semibold text-blue-600">Assigned Work: <span className="text-gray-800">{trainee.assigned_work}</span></p>
              <p className="text-xl font-semibold text-blue-600">Target Date: <span className="text-gray-800">{trainee.target_date}</span></p>
            </div>
              <div>
                <Link
                  to={`/update/${trainee.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
                  onClick={() => {
                    if (onEditTrainee) {
                      onEditTrainee(trainee.id);
                    }
                  }}
                >
                  Update
                </Link>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                  onClick={() => handleDelete(trainee.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No trainees found</p>
        )}
      </ul>
    </div>
  );
};

export default TraineeList;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateTrainee = ({ trainee, onUpdateTrainee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const [start_date, setStart_Date] = useState("");
  const [end_date, setEnd_Date] = useState("");
  const [institute, setInstitute] = useState("");
  const [languages_known, setLanguages_Known] = useState("");
  const [field_of_specialization, setField_of_Specialization] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [assigned_work, setAssigned_Work] = useState("");
  const [target_date, setTarget_Date] = useState("");
  const navigate = useNavigate();

  // Ensure state updates when trainee prop changes
  useEffect(() => {
    if (trainee) {
      setName(trainee.name || "");
      setEmail(trainee.email || "");
      setMobile(trainee.mobile || "");
      setAddress(trainee.address || "");
      setNIC(trainee.nic || "");
      setStart_Date(trainee.start_date || "");
      setEnd_Date(trainee.end_date || "");
      setInstitute(trainee.institute || "");
      setLanguages_Known(trainee.languages_known || "");
      setField_of_Specialization(trainee.field_of_specialization || "");
      setSupervisor(trainee.supervisor || "");
      setAssigned_Work(trainee.assigned_work || "");
      setTarget_Date(trainee.target_date || "");
    }
  }, [trainee]);

  // Function to call the backend API for updating trainee data
  const updateTraineeInBackend = async (traineeId, updatedData) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/update/${traineeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Trainee updated:", result.message);
      } else {
        console.error("Error updating trainee:", result.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare updated trainee data
    const updatedTrainee = { name, email, mobile, address, nic, start_date, end_date, institute, languages_known, field_of_specialization, supervisor, assigned_work, target_date };

    // Update the trainee in the backend
    if (trainee && trainee.id) {
      await updateTraineeInBackend(trainee.id, updatedTrainee);
    }

    // Call the onUpdateTrainee prop function to update the state (optional)
    if (onUpdateTrainee) {
      onUpdateTrainee(trainee.id, updatedTrainee);
    }

    // Navigate to the trainee list after updating
    navigate("/trainee-list");
  };

  if (!trainee) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-700 text-lg">Loading trainee details...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Update Trainee
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="number"
              value={nic}
              onChange={(e) => setNIC(e.target.value)}
              placeholder="nic"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="date"
              value={start_date}
              onChange={(e) => setStart_Date(e.target.value)}
              placeholder="start_date"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="date"
              value={end_date}
              onChange={(e) => setEnd_Date(e.target.value)}
              placeholder="end_date"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
              placeholder="institute"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={languages_known}
              onChange={(e) => setLanguages_Known(e.target.value)}
              placeholder="languages_known"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="field_of_specialization" className="block text-sm font-medium text-gray-700">Field of Specialization</label>
            <select
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="field_of_specialization"
              id="field_of_specialization"
              value={field_of_specialization}
              onChange={(e) => setField_of_Specialization(e.target.value)}
              required
            >
              <option value="" disabled>Select a field of specialization</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
               </select>
          </div>

          <div className="mb-4">
           <label htmlFor="supervisor" className="block text-sm font-medium text-gray-700">Supervisor</label>
            <select
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="supervisor"
              id="supervisor"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
              required
            >
              <option value="" disabled>Select a supervisor</option>
              <option value="Girirdaran">Girirdaran</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Alice Brown">Alice Brown</option>
              <option value="Bob Johnson">Bob Johnson</option>
              </select>
          </div>

          <div>
            <input
              type="text"
              value={assigned_work}
              onChange={(e) => setAssigned_Work(e.target.value)}
              placeholder="assigned_work"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="date"
              value={target_date}
              onChange={(e) => setTarget_Date(e.target.value)}
              placeholder="target_date"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Trainee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTrainee;

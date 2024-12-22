import React, { useState } from 'react';
import axios from 'axios';

const AddTrainee = ({ onAddTrainee }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [nic, setNIC] = useState('');
    const [start_date, setStart_Date] = useState('');
    const [end_date, setEnd_Date] = useState('');
    const [institute, setInstitute] = useState('');
    const [languages_known, setLanguages_Known] = useState('');
    const [field_of_specialization, setField_of_Specialization] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [assigned_work, setAssigned_Work] = useState('');
    const [target_date, setTarget_Date] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTrainee = { name, email, mobile, address, nic, start_date, end_date, institute, languages_known, field_of_specialization, supervisor, assigned_work, target_date };

        try {
            // POST request to Flask API
            const response = await axios.post('http://localhost:5000/add', newTrainee);
            alert(response.data.message);  // Show success message
            onAddTrainee(newTrainee);  // Update the local state in parent
            setName('');
            setEmail('');
            setMobile('');
            setAddress('');
            setNIC('');
            setStart_Date('');
            setEnd_Date('');
            setInstitute('');
            setLanguages_Known('');
            setField_of_Specialization('');
            setSupervisor('');
            setAssigned_Work('');
            setTarget_Date('');

        } catch (error) {
            console.error('There was an error adding the trainee!', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Add New Trainee</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter trainee name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter trainee email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input
                        type="tel"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="mobile"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter trainee mobile"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter trainee address"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nic" className="block text-sm font-medium text-gray-700">NIC</label>
                    <input
                        type="number"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="nic"
                        id="nic"
                        value={nic}
                        onChange={(e) => setNIC(e.target.value)}
                        placeholder="Enter trainee nic"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Training Start Date</label>
                    <input
                        type="date"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="start_date"
                        id="start_date"
                        value={start_date}
                        onChange={(e) => setStart_Date(e.target.value)}
                        placeholder="Enter training start date"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">Training End Date</label>
                    <input
                        type="date"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="end_date"
                        id="end_date"
                        value={end_date}
                        onChange={(e) => setEnd_Date(e.target.value)}
                        placeholder="Enter training end date"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="institute"
                        id="institute"
                        value={institute}
                        onChange={(e) => setInstitute(e.target.value)}
                        placeholder="Enter institute"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="languages_known" className="block text-sm font-medium text-gray-700">Languages Known</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="languages_known"
                        id="languages_known"
                        value={languages_known}
                        onChange={(e) => setLanguages_Known(e.target.value)}
                        placeholder="Enter languages known"
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
                        <option value="" disabled>Select a Field of Specialization</option>
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
                        <option value="Giridaran">Giridaran</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Alice Brown">Alice Brown</option>
                        <option value="Bob Johnson">Bob Johnson</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="assigned_work" className="block text-sm font-medium text-gray-700">Assigned Work</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="assigned_work"
                        id="assigned_work"
                        value={assigned_work}
                        onChange={(e) => setAssigned_Work(e.target.value)}
                        placeholder="Enter assigned work"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="target_date" className="block text-sm font-medium text-gray-700">Target Date</label>
                    <input
                        type="date"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="target_date"
                        id="target_date"
                        value={target_date}
                        onChange={(e) => setTarget_Date(e.target.value)}
                        placeholder="Enter target date"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300">Add Trainee</button>
            </form>
        </div>
    );
};

export default AddTrainee;

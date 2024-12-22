from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB URI
db = client['traineeDB']  # Database name
collection = db['trainees']  # Collection name

# Route to get all trainees
@app.route('/api', methods=['GET'])
def get_data():
    trainee_data = collection.find()  # Fetch all data from MongoDB
    trainees = []
    for trainee in trainee_data:
        trainees.append({
            'id': str(trainee['_id']),  # Convert ObjectId to string
            'name': trainee['name'],
            'email': trainee['email'],
            'mobile': trainee['mobile'],
            'address': trainee['address'],
            'nic': trainee['nic'],
            'start_date': trainee['start_date'],
            'end_date': trainee['end_date'],
            'institute': trainee['institute'],
            'languages_known': trainee['languages_known'],
            'field_of_specialization': trainee['field_of_specialization'],
            'supervisor': trainee['supervisor'],
            'assigned_work': trainee['assigned_work'],
            'target_date': trainee['target_date']
        })
    return jsonify({"message": "Data fetched successfully", "data": trainees})

# Route to add a new trainee
@app.route('/add', methods=['POST'])
def add_trainee():
    data = request.json
    trainee = {
        'name': data['name'],
        'email': data['email'],
        'mobile': data['mobile'],
        'address': data['address'],
        'nic': data['nic'],
        'start_date': data['start_date'],
        'end_date': data['end_date'],
        'institute': data['institute'],
        'languages_known': data['languages_known'],
        'field_of_specialization': data['field_of_specialization'],
        'supervisor': data['supervisor'],
        'assigned_work': data['assigned_work'],
        'target_date': data['target_date']
    }
    collection.insert_one(trainee)  # Insert data into MongoDB
    return jsonify({'message': 'Trainee added successfully'}), 201

# Route to update an existing trainee
@app.route('/update/<trainee_id>', methods=['PUT'])
def update_trainee(trainee_id):
    data = request.json
    updated_data = {
        'name': data.get('name'),
        'email': data.get('email'),
        'mobile': data.get('mobile'),
        'address': data.get('address'),
        'nic': data['nic'],
        'start_date': data['start_date'],
        'end_date': data['end_date'],
        'institute': data['institute'],
        'languages_known': data['languages_known'],
        'field_of_specialization': data['field_of_specialization'],
        'supervisor': data['supervisor'],
        'assigned_work': data['assigned_work'],
        'target_date': data['target_date']
    }
    result = collection.update_one(
        {'_id': ObjectId(trainee_id)},  # Find trainee by ObjectId
        {'$set': updated_data}         # Update fields with new data
    )
    if result.matched_count == 0:
        return jsonify({'message': 'Trainee not found'}), 404

    return jsonify({'message': 'Trainee updated successfully'})

# Route to delete a trainee
@app.route('/delete/<trainee_id>', methods=['DELETE'])
def delete_trainee(trainee_id):
    result = collection.delete_one({'_id': ObjectId(trainee_id)})  # Find and delete by ObjectId
    
    if result.deleted_count == 0:
        return jsonify({'message': 'Trainee not found'}), 404

    return jsonify({'message': 'Trainee deleted successfully'})



if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB URI
db = client['traineeDB']  # Database name
collection = db['trainees']  # Collection name

@app.route('/api', methods=['GET'])
def get_data():
    trainee_data = collection.find()  # Fetch all data from MongoDB
    trainees = []
    for trainee in trainee_data:
        trainees.append({
            'id': str(trainee['_id']),  # MongoDB ObjectId needs to be converted to string
            'name': trainee['name'],
            'email': trainee['email'],
            'mobile': trainee['mobile'],
            'address': trainee['address']
        })
    return jsonify({"message": "Data fetched successfully", "data": trainees})


@app.route('/add', methods=['POST'])
def add_trainee():
    data = request.json
    trainee = {
        'name': data['name'],
        'email': data['email'],
        'mobile': data['mobile'],
        'address': data['address']
    }
    collection.insert_one(trainee)  # Insert data into MongoDB
    return jsonify({'message': 'Trainee added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)

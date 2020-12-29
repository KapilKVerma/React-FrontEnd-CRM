from flask import Flask, jsonify, request
from flask_cors import CORS


# Configure app
app = Flask(__name__)
CORS(app)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'database-2.ctwjoabyjaxq.us-east-2.rds.amazonaws.com'


searches = []

Users = [{
    "id": "1",
    "name": "Tom Derick",
    "contact": "0412345662",
    "email": " firstname.last@company.com",
    "address": "345 #address, City, State - 5678",
    "registration_no": "#8345#45bHJ4Erc&77",
    "service_type": "monthly",
}]


@ app.route('/')
def index():
    response = jsonify({"message": "CRM server is running"})
    return response

# Users routes


@ app.route('/users/', methods=['GET'])
def user():
    return jsonify(Users)


@ app.route('/users/search', methods=['POST'])
def search_user():
    user_data = request.json
    print(user_data)
    searches.append(user_data)
    return jsonify(searches)
# Query routes


if(__name__) == '__main__':
    app.run(debug=True)

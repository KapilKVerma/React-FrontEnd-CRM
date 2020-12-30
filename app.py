from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import random
from models import *


# Configure app
app = Flask(__name__)
CORS(app)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://tolkbjmjklapry:40a87b21641ee89de59e2883f444a1869c28369071b6cf512d5a40a192dd2f1c@ec2-52-2-82-109.compute-1.amazonaws.com:5432/d3tcohbpq9o3ka'

# Initialise connection to the db
db = SQLAlchemy(app)


@ app.route('/')
def index():
    response = jsonify({"message": "CRM server is running"})
    return response

# Employee routes =====


@ app.route('/users/', methods=['GET'])
def user():
    return jsonify(message="Employee get route")


# Query routes =====


@ app.route('/query', methods=['POST'])
@cross_origin()
def register_query():
    query_data = request.json
    print(query_data)
    return jsonify(query_data)

# Customer routes =====


# Register Route
def customers_serializer(customer):
    return {
        "id": customer.id,
        "name": customer.name,
        "contact": customer.contact,
        "email":  customer.email,
        "address": customer.address,
        "registration_no": customer.registration_no,
        "service_type": customer.service_type,
    }


@ app.route('/cust', methods=['GET', 'POST'])
@cross_origin()
def register_customer():
    if request.method == 'GET':
        return jsonify([*map(customers_serializer, Customer.query.all())])
    if request.method == 'POST':
        reg_no = random.randint(100000, 999999)
        cust_data = request.json
        cust_reg = Customer(name=cust_data['first_name'] + ' ' + cust_data['last_name'], contact=cust_data['contact_no'], email=cust_data['email'],
                            address=cust_data['address'], registration_no=reg_no, service_type=cust_data['service_type'])
        db.session.add(cust_reg)
        db.session.commit()

        if cust_data:
            return jsonify({'Cust Reg': cust_data})
        else:
            return jsonify({"message": "something went wrong."})


@ app.route('/cust/search',  methods=['POST'])
def search_cust():
    search_details = request.json
    return jsonify([*map(customers_serializer, Customer.query.filter_by(contact=search_details['contact']))])

# Employee Routes =====


def employees_serializer(emp):
    return {
        "emp_id": emp.emp_id,
        "emp_name": emp.emp_name,
        "emp_position": emp.emp_position,
        "emp_email":  emp.emp_email,
        "emp_contact": emp.emp_contact,
        "emp_officebranch": emp.emp_officebranch,
    }


@ app.route('/emp', methods=['GET'])
def get_employees():
    return jsonify([*map(employees_serializer, Employee.query.all())])


@ app.route('/emp/new', methods=['POST'])
def register_employee():
    emp_data = request.json
    emp_id = random.randint(999000, 999999)
    emp_name = emp_data['first_name'] + ' ' + emp_data['last_name']
    emp_email_name = emp_data['first_name'] + emp_data['last_name']
    emp_email = emp_email_name.lower() + '@companyname.com.au'
    emp_reg = Employee(emp_id=emp_id, emp_name=emp_name, emp_department=emp_data['department'], emp_position=emp_data['position'],
                       emp_officebranch=emp_data['office_branch'], emp_contact=emp_data['contact_no'],
                       emp_startdate=emp_data['date_started'], emp_email=emp_email, emp_address=emp_data['address'],
                       emergency_contactname=emp_data['emergency_contact_name'],
                       emergency_contactno=emp_data['emergency_contact_no'])

    db.session.add(emp_reg)
    db.session.commit()

    if emp_data:
        return jsonify({'Emp Reg': emp_data})
    else:
        return jsonify({"message": "something went wrong."})


if(__name__) == '__main__':
    app.run(debug=True)

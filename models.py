from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Customer(db.Model):
    """ Customer MODEL """

    __tablename__ = "registered_customers"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    contact = db.Column(db.BigInteger, unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    address = db.Column(db.String(250), nullable=False)
    registration_no = db.Column(db.BigInteger, unique=True, nullable=False)
    service_type = db.Column(db.String(50), nullable=False)


class Employee(db.Model):
    """ Employee MODEL """

    __tablename__ = "employees"
    id = db.Column(db.Integer, primary_key=True)
    emp_id = db.Column(db.BigInteger, unique=True, nullable=False)
    emp_name = db.Column(db.String(150), nullable=False)
    emp_department = db.Column(db.String(100), nullable=False)
    emp_position = db.Column(db.String(100), nullable=False)
    emp_officebranch = db.Column(db.String(100), nullable=False)
    emp_contact = db.Column(db.BigInteger, unique=True, nullable=False)
    emp_startdate = db.Column(db.String(100), nullable=False)
    emp_email = db.Column(db.String(100), unique=True, nullable=False)
    emp_address = db.Column(db.String(250), nullable=False)
    emergency_contactname = db.Column(db.String(100), nullable=False)
    emergency_contactno = db.Column(db.BigInteger, unique=True, nullable=False)




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Application() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddEmployee = (event ) => {

    event.preventDefault()

    
    const newEmployee = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      position: position,
      profilePicture: profilePicture,
    };
    setEmployees([...employees, newEmployee]);
    setName('');
    setSurname('');
    setEmail('');
    setPhone('');
    setPosition('');
    setProfilePicture(null);
  };

  const handleEditEmployee = (index) => {
    const employeeToEdit = employees[index];
    setName(employeeToEdit.name);
    setSurname(employeeToEdit.surname);
    setEmail(employeeToEdit.email);
    setPhone(employeeToEdit.phone);
    setPosition(employeeToEdit.position);
    setProfilePicture(employeeToEdit.profilePicture);
    handleDeleteEmployee(index);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const fullname = `${employee.name} ${employee.surname}`;
    return fullname.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className='App'>
 
      <h1>Register Employee</h1>
    

      <form className='form' onSubmit={handleAddEmployee}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /> <br></br>
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        /> <br></br>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /> <br></br>
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        /> <br></br>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          required
        /> <br></br>
        <button  required >Add Employee</button>
      </form>
      <div>
        <input
          type="text"
          placeholder="Find employee"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div>
        <p1><b>Regigtered employees:<br></br></b></p1>
      <table  class="center"> 
     
        <thead>
          <tr>
            <th>Surname &nbsp; </th>
            <th>Name &nbsp;</th>
            <th>Email &nbsp;</th>
            <th>Phone &nbsp;</th>
            <th>Position &nbsp; </th>
            <th>Picture &nbsp;</th>
            <th>Delete/Update Employee</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.position}</td>
              <td>
                {employee.profilePicture && (
                  <img
                    src={employee.profilePicture}
                    alt="Profile"
                    style={{ width: '50px', height: '50px' }}
                  />
                )}
              </td>
              <td>
                <button onClick={() => handleEditEmployee(index)}>Update Details</button>
                <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      </div>
      <Link to="/" > <b><button className='but'>Go back Home</button></b></Link>
    </div>
  );
}

export default Application;

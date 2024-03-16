import "../index.css";
import Employee from "../Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../Components/AddEmployee";
import EditEmployee from "../Components/EditEmployee";


function Employees() {
  // The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.
  // useState accepts an initial state and returns two values: (1). The current state. (2). A function that updates the state
  // using map to loop through set of data stored in a State as an array
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ayodeji",
      role: "Developer",
      img: "https://images.pexels.com/photos/19230546/pexels-photo-19230546/free-photo-of-woman-in-summer.jpeg",
    },
    {
      id: 2,
      name: "Oluwasegun",
      role: "Manager",
      img: "https://images.pexels.com/photos/19691804/pexels-photo-19691804/free-photo-of-model-in-a-beige-headwrap.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director",
      img: "https://images.pexels.com/photos/7704061/pexels-photo-7704061.jpeg?",
    },
    {
      id: 4,
      name: "Deleano",
      role: "Designer",
      img: "https://images.pexels.com/photos/19651869/pexels-photo-19651869/free-photo-of-a-young-woman-with-black-hair.jpeg",
    },
    {
      id: 5,
      name: "Rachel",
      role: "Intern",
      img: "https://images.pexels.com/photos/19565725/pexels-photo-19565725/free-photo-of-man-in-shirt-with-tie.jpeg",
    },
    {
      id: 6,
      name: "Sunday", 
      role: "Content Creator",
      img: "https://images.pexels.com/photos/19230546/pexels-photo-19230546/free-photo-of-woman-in-summer.jpeg",
    },
  ]);

  // now we want to update the state from app.js from the state in the modal inside editEmployee.js and we creact a function first which we will pass as a props in the employee component.
  function updateEmployee(id, newName, newRole) {
    // we create a variable to loop through the state employees variable
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        // using spread operator to grab all the value and overwrite the one i want to change
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  // here we have the function that add new employee and is attached with employee.js format because the property saved in the newEmployee variable are those created when we looped through the employees variable and saved in the employee component as props
  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
    // the ...employees is called a spread operator
  }
  // the add new employee stops here

  const showEmployees = true;
  return (
    <>
      <div className="App">
        {showEmployees ? (
          <>
            <div className="flex flex-wrap justify-center my-2">
              {employees.map((employee) => {
                // we want to see how to pass a component down as a property instead of passing data down in multiple layers
                const editEmployee = (
                  <EditEmployee
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee}
                  />
                );

                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    // we pass the function as a props
                    // updateEmployee={updateEmployee}
                    editEmployee={editEmployee} 
                  />
                );
              })}
            </div>
            <AddEmployee newEmployee={newEmployee} />
          </>
        ) : (
          <p>You cannot see the employees</p>
        )}
      </div>
    </>
  );
}

export default Employees;

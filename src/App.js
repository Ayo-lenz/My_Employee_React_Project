import './App.css';
import Employee from './Components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      
      {showEmployees ? (
        <>

          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
          />
          <Employee name='Ayodeji'role = {role}/>
          <Employee name='John' role='Software Engineer'/>
          <Employee name='Sunday'/>
          <Employee name='Johnnyz'/>
          <Employee />
        </>
       ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;

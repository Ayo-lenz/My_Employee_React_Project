import './index.css';
import Header from './Components/Header';
import Employees from './Pages/Employees';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';

function App() {
  
//  in a real react app, our entire website should be sorrounded with the header
// route is used to allow different url paths to go to different pages in our application
  return (
    <BrowserRouter basename=''>
      <Header>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path='/dictionary' element= {<Dictionary />} />          
          {/* <Route path='/definition' element= {<Definition />} />           */}
          <Route path='/definition/:search' element= {<Definition />} />          
        </Routes>
      </Header> 
    </BrowserRouter>
  );
   
} 

export default App;

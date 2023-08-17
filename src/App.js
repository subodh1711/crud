import logo from './logo.svg';
import './App.css';
import {Link,Routes,Route} from 'react-router-dom';
import GetApi from './components/GetApi';
import AddApi from './components/AddApi';
import UpdateApi from './components/UpdateApi';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add </Link>

      </nav>
     <Routes>
      <Route path="/" element={<GetApi/>}/>
      <Route path="/add" element={<AddApi/>}/>
      <Route path="/update/:id" element={<UpdateApi/>}/>
     </Routes>
     
  </div>
  );
}

export default App;

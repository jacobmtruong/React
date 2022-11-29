import './App.css';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Authors from './views/Authors';
import Edit from './components/Edit';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Link to="/authors" className='btn btn-primary'>Home</Link>
        <Link to="/authors/add" className='btn btn-warning'>Add an Author</Link>
      </div>


      <Routes>
        <Route path='/authors/add' element={<Add />}/>

        <Route path='/authors' element={<Authors />} />

        <Route path='/authors/:id/edit' element={<Edit/>} />

        <Route path="*" element={< Navigate to="/authors" replace />} />
      </Routes>
    </div>
  );
}

export default App;

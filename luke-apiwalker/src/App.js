import './App.css';
import { Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
    
      <Form />

      <Routes>
        <Route path='*' element={
          <main>
            <p>There's no route for this</p>
          </main>
        } />

        <Route path="/:noun/:personId" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;

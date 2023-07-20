
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import P1 from './Components/P1';
import { ToastContainer } from 'react-toastify';
import DataContext from './Context/Context';

function App() {
  return (
    <BrowserRouter>
      <DataContext>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<P1 />} />
        </Routes>
      </DataContext>
    </BrowserRouter>
  );
}

export default App;

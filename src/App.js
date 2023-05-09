import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout';
import Dashboard from './components/dashboard';
import Assets from './components/assets';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/assets' element={<Assets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

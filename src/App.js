import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout';
import Dashboard from './components/dashboard';
import Pools from './components/pools';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/pools' element={<Pools />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

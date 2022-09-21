import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import ReservationsPage from './pages/ReservationsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        {/* <Route path="/reservations/add" element={<ReservationsAddPage />} />
        <Route path="/" element={<ItemsAddPage />} />
        <Route path="/" element={<ItemsDeletePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import history from './helpers/history';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import ReservationsPage from './pages/ReservationsPage';
import NewItemPage from './pages/NewItemPage';

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<PrivateRoute><ReservationsPage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/new" element={<NewItemPage />} />
        {/* <Route path="/reservations/add" element={<ReservationsAddPage />} />
        <Route path="/" element={<ItemsAddPage />} />
        <Route path="/" element={<ItemsDeletePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

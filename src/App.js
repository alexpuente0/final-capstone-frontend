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
import NewItemPage from './pages/NewItemPage';
import ReservationsAddPage from './pages/ReservationsAddPage';
import ReservationsPage from './pages/ReservationsPage';
import DeleteItemPage from './pages/DeleteItemPage';
import SignupPage from './pages/SignupPage';

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
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/new" element={<PrivateRoute><NewItemPage /></PrivateRoute>} />
        <Route path="/reservations/add" element={<PrivateRoute><ReservationsAddPage /></PrivateRoute>} />
        <Route path="/reservations/add/:id" element={<PrivateRoute><ReservationsAddPage /></PrivateRoute>} />
        <Route path="/delete" element={<PrivateRoute><DeleteItemPage /></PrivateRoute>} />
        {/* <Route path="/" element={<ItemsDeletePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

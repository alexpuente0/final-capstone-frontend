import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="reservations" element={<ReservationsPage />} />
          <Route path="/reservations/add" element={<ReservationsAddPage />} />
          <Route path="/" element={<ItemsAddPage />} />
          <Route path="/" element={<ItemsDeletePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

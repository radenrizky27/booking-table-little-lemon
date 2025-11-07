import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './view/Homepage';
import Menu from './view/Menu';
import OrderOnline from './view/OrderOnline';
import Login from './view/Login';
import Reservation from './view/Reservation';
import { Route, Routes } from 'react-router-dom';
import ConfirmationPage from './view/ConfirmationPage';
import ScrollToTop from './components/ScollToTop';

function App() {
  return (
  <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/confirmation' element={<ConfirmationPage />}/>
      </Routes>
    <Footer />
  </>
  );
}

export default App;
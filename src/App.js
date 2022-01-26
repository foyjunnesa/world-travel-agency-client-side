import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Services from './pages/Home/Services/Services';
import AddService from './pages/AddService/AddService';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}>

            </Route>

            <Route path="/home" element={<Home />}>

            </Route>

            <Route path="/services" element={<Services />}>

            </Route>

            <Route path="/about" element={<About />}>

            </Route>

            <Route path="/login" element={<Login />}>

            </Route>

            <Route path="/register" element={<Register />}>

            </Route>
            <Route path="/booking/:serviceId" element={<Booking />}>

            </Route>

            <Route path="/addservice" element={<AddService />}>

            </Route>

            <Route path="*" element={<NotFound />}>

            </Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

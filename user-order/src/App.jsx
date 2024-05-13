import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_URL } from './utils/constants';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './pages/homeBanner';
import AboutUs from './pages/aboutUs';
import OrderMenu from './pages/orderMenu';
import CartOrder from './pages/cartOrder';
import Admin from './admin';

const App = () => {
  return ( 
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={PAGE_URL.HOME} element={<Homepage />} />
          <Route path={PAGE_URL.ABOUT} element={<AboutUs />} />
          <Route path={PAGE_URL.MENU} element={<OrderMenu />} />
          <Route path={PAGE_URL.CART} element={<CartOrder />} />
          <Route path={PAGE_URL.ADMIN} element={<Admin />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


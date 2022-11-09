import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Market from "./pages/Market";
import Create from "./pages/Create";
import Contact from "./pages/Contact";

import Wallet from "./pages/Wallet";
import NftDetails from "./pages/NftDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/create" element={<Create />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/market/:id" element={<NftDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

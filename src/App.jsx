import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css";
import Register from "./pages/Register";
import Auction from "./pages/Auction";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./css/GlobalStyle";
import UploadThings from "./pages/UploadThings";
import UploadList from "./pages/UploadList";
import { TotalCategory } from "./pages/TotalCategory";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Navbar /> {/* Navbar 항상 하단에 고정 */}
          <Routes>
            <Route path="/" element={<Auction />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uploadlist" element={<UploadList />} />
            <Route path="/upload" element={<UploadThings />} />
            <Route path="/category-page" element={<TotalCategory />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

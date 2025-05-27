import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./pages/Register";
import Auction from "./pages/Auction";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./css/GlobalStyle";
import UploadThings from "./pages/UploadThings";
import UploadList from "./pages/UploadList";
import { TotalCategory } from "./pages/TotalCategory";
import ProductDetail from "./pages/ProductDetail";
import Inspection from "./pages/Inspection";
import Search from "./pages/Search";
import AuctionProduct from "./pages/AuctionProduct";
import UpcomingDetail from "./pages/UpcomingDetail";
import DoneDetail from "./pages/DoneDetail";
import { Previous } from "./pages/Previous";
import { SearchBid } from "./pages/SearchBid";
import EditProfile from "./pages/EditProfile";

// 라우팅 + Navbar 처리용 서브 컴포넌트
function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {/* 경로가 "/"가 아닐 때만 Navbar 표시 */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/previous-bids" element={<Previous />} />
        <Route path="/search-bids" element={<SearchBid />} />
        <Route path="/uploadlist" element={<UploadList />} />
        <Route path="/upload" element={<UploadThings />} />
        <Route path="/category-page" element={<TotalCategory />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/auctionproduct/:auctionId" element={<AuctionProduct />} />
        <Route path="/upcoming/:productId" element={<UpcomingDetail />} />
        <Route path="/done/:productId" element={<DoneDetail />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

// 최상위 App
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;

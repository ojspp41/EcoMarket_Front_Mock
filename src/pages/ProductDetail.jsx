
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Detail/Navbar.jsx';
import ImageSlider from '../components/Detail/ImageSlider';
import ProductInfo from '../components/Detail/ProductInfo';
import SellerInfo from '../components/Detail/SellerInfo';
import BidInfo from '../components/Detail/BidInfo';
import TransactionChart from '../components/Detail/TransactionChart';
import "../css/pages/ProductDetail.css";
import AuctionModal from '../components/Modal/AuctionModal.jsx';
import Cookies from 'js-cookie';// 매핑 함수 가져오기
import { getCategoryDisplayName } from '../utils/categoryMapping.js';


import mockProductDetail from '../data/mockProductDetail';
const apiClient = axios.create({
  baseURL: 'https://ecomarket-cuk.shop', // 기본 API URL 설정
});

const ProductDetail = () => {
  const { productId } = useParams(); // URL의 params에서 productId 가져오기
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
  // API 대신 목데이터 설정
  setProduct(mockProductDetail);
}, [productId]);



  const handleRefreshClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 700); // 0.7초 후에 애니메이션을 중지
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const topBidPrice = product.top3BidDatePrice?.[0]?.bidPrice || 0;
  const bidHistory = product.top3BidDatePrice?.map(bid => ({
    date: bid.bidDate.split(' ')[0],
    time: bid.bidDate.split(' ')[1],
    amount: bid.bidPrice,
  })) || [];

  return (
    <div className="detail-product-detail-container">
    <Navbar category={getCategoryDisplayName(product.auctionCategory)} />
    {/* <ImageSlider imageUrls={product.images} productName={product.productName} /> */}
    <ImageSlider 
      imageUrls={
        product.images && product.images.length > 0 
          ? product.images 
          : ["/assets/picture1.svg", "/assets/picture2.svg", "/assets/picture3.svg"] // 기본 이미지
      } 
      productName={product.productName} 
    />
    <ProductInfo productName={product.productName} productDescription={product.productDescription} />
    <SellerInfo
      sellerName={product.sellerNickname}
      sellerImageUrl="/assets/picture1.svg"
      auctionEndTime={product.endTime}
    />
    <div className="margingray"></div>
    <BidInfo currentPrice={topBidPrice} currentBidders={product.numOfBidders} />
    <TransactionChart
      transactionVolume={product.bidVolumeByDate || []}
      bidHistory={bidHistory}
    />
    <div className="refresh-status">
      <span className="refresh-text">실시간 변경 새로고침</span>
      <div className="img-box" onClick={handleRefreshClick}>
        <img
          src="/assets/refresh.svg"
          alt="refresh"
          className={`refresh-icon ${isRotating ? 'rotating' : ''}`}
        />
      </div>
    </div>
    <button className="fixed-button" onClick={handleOpenModal}>경매입장하기</button>
    {isModalOpen && <AuctionModal onClose={handleCloseModal} productId={product.productId} />}
    <div className="show"></div>
  </div>
  );
};

export default ProductDetail;

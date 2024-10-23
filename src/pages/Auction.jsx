// pages/SearchPage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchContainer';
import "../css/pages/Auction.css";
import auchor_categories from '../data/auchor_categories';
import AuctionItem from '../components/AuctionItem';
import UpcomingAuctionItem from '../components/UpcomingAuctionItem';
import { Navigate } from 'react-router-dom';
import mockAuctionData from '../data/mockAuctionData'; // import mock auction data
import mockUpcomingAuctions from '../data/mockUpcomingAuctions'; // import mock upcoming auctions
import { useNavigate } from 'react-router-dom';

const Auction = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 상태

  const navigateToCategoryPage = () => {
    navigate('/category-page');  // 원하는 경로로 설정
  };
  const handleCategoryClick = (index) => { 
    setSelectedCategory(index); // 선택된 카테고리 업데이트
  };
  
  return (
    <div className="auction-container"> {/* 큰 컨테이너 */}
        <SearchBar/>
        <div className="main_desc">
          <p>중고 물품을 <br />경매로</p>
        </div>
        <div className="auction-info">
          <div className="left-content">
            <div className="step">
              <div className="step-circle">1</div>
              <p>원하는 물품을 찾고</p>
            </div>
            <div className="step">
              <div className="step-circle">2</div>
              <p>입찰 가격 제시하면</p>
            </div>
            <div className="step">
              <div className="step-circle">3</div>
              <p>마감 때 제일 높은 가격이 낙찰!</p>
            </div>
          </div>
          <div className="right-content">
            {/* 여기에 SVG 아이콘을 추가 */}
            <img src="/assets/mainicon.svg" alt="icon" className="auction-icon" />
          </div>
        </div>
        <div className="auction-category">
          <h2 className="category-title">경매 카테고리</h2>
          <div className="category-grid">
            {auchor_categories.map((category, index) => (
              <div
                className={`category-item ${selectedCategory === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleCategoryClick(index)} // 카테고리 클릭 시 호출
              >
                <div className="category-circle">
                  <img src={category.img} alt={category.title} />
                </div>
                <p className="category-label">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recent-auctions">
        <div className="recent-auctions-header">
          <h2 className="recent-auctions-titles">해당 카테고리 최근 TOP5 경매</h2>
          <span className="view-all-text" onClick={() => navigateToCategoryPage()}>전체보기</span>
        </div>
          <div className="auction-list">
            {mockAuctionData.map((auction) => (
              <AuctionItem auction={auction} key={auction.id} /> 
            ))}
          </div>
        </div>
        <div className="recent-auctionss">
          <h2 className="recent-auctions-title">진행 예정 경매</h2>
          <p className="upcoming-auctions-message">오픈을 앞둔 경매를 미리 둘러보세요!</p>
          <div className="upcoming-auction-list">
              {mockUpcomingAuctions.map((auction) => (
                <UpcomingAuctionItem auction={auction} key={auction.id} />
              ))}
          </div>
        </div>
        <div style={{ marginBottom: '150px' }}></div>
    </div>
  );
};

export default Auction;
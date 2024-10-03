// pages/SearchPage.js
import React from 'react';
import SearchBar from '../components/SearchContainer';
import "../css/pages/Auction.css";
import auchor_categories from '../data/auchor_categories';
import AuctionItem from '../components/AuctionItem';
const Auction = () => {
  const mockAuctionData = [
    {
      id: 1,
      img: '/assets/item1.svg',
      title: '모나리자',
      desc: '레오나르도 다빈치 작품',
      category: '그림',
      currentBidderCount: 12345,
      price: 500000
    },
    {
      id: 2,
      img: '/assets/item1.svg',
      title: '모나리자',
      desc: '레오나르도 다빈치 작품',
      category: '그림',
      currentBidderCount: 12345,
      price: 500000
    },
  ];
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
              <div className="category-item" key={index}>
                <div className="category-circle">
                  <img src={category.img} alt={category.title} />
                </div>
                <p className="category-label">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recent-auctions">
          <h2 className="recent-auctions-title">최근 올라온 경매</h2>
          <div className="auction-list">
            {mockAuctionData.map((auction) => (
              <AuctionItem auction={auction} key={auction.id} /> 
            ))}
          </div>
        </div>
        <div style={{ marginBottom: '150px' }}></div>
    </div>
  );
};

export default Auction;
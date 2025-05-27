import React from 'react';
import "../css/components/UpcomingAuctionItem.css";

// 날짜 형식 변환 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 맞춤
  const day = String(date.getDate()).padStart(2, '0');         // 일을 2자리로 맞춤
  return `${month}/${day}`; // MM/DD 형식으로 반환
};

const UpcomingAuctionItem = ({ auction }) => {
  return (
    <div className="upcoming-auction-item">
      <img src={auction.img} alt={auction.title} className="auction-image" />
      <div className="auction-details">
        <p className="auction-item-categorys">{auction.category}</p>
        <p className="auction-title">{auction.title}</p>
        <p className="auction-date">
          <span className="date-background">{formatDate(auction.date)}</span>
        </p>
        <p className="auction-price">{parseInt(auction.price).toLocaleString()}원</p> {/* 가격 추가 */}
      </div>
    </div>
  );
};

export default UpcomingAuctionItem;

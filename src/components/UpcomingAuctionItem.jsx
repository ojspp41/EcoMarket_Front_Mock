import React from 'react';
import "../css/components/UpcomingAuctionItem.css";

const UpcomingAuctionItem = ({ auction }) => {
  return (
    <div className="upcoming-auction-item">
      <img src={auction.img} alt={auction.title} className="auction-image" />
      <div className="auction-details">
        <p className="auction-item-categorys">{auction.category}</p>
        <p className="auction-title">{auction.title}</p>
        <p className="auction-date">
          <span className="date-background">{auction.date}</span>
        </p>
        <p className="auction-price">{auction.price.toLocaleString()}원</p> {/* 가격 추가 */}
      </div>
    </div>
  );
};

export default UpcomingAuctionItem;

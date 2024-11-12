import { useEffect, useState } from "react";

import SearchBar from '../components/SearchContainer';
import "../css/pages/Auction.css";
import auchor_categories from '../data/auchor_categories';
import AuctionItem from '../components/AuctionItem';
import UpcomingAuctionItem from '../components/UpcomingAuctionItem';
import mockUpcomingAuctions from '../data/mockUpcomingAuctions';
import AuctionCard from "../components/AuctionCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../css/pages/AuctionProduct.css";
import BidInfo from "../components/Detail/BidInfo";
import TransactionChart from "../components/Detail/TransactionChart";
const AuctionProduct = () => {
  const navigate = useNavigate();

  const mockAuctionItems = [
    {
      productId: 1,
      productName: "모자",
      productDescription: "모자에 대한 설명입니다.",
      startPrice: "10,000",
      imageUrl: "/assets/picture1.svg",
      auctionCategory: "CLOTHING",
      currentPrice: 50000000,
      nextBidPrice: 39930000, // Added next bid price
      currentBidders: 1234,
      transactionVolume: [
        { date: "10/20", volume: 10 },
        { date: "10/21", volume: 18 },
        { date: "10/22", volume: 13 },
        { date: "10/23", volume: 21 },
        { date: "10/24", volume: 8 },
        { date: "10/25", volume: 17 },
        { date: "10/26", volume: 5 },
        { date: "10/27", volume: 15 },
        { date: "10/28", volume: 9 },
      ],
      bidHistory: [
        { date: "10/28", time: "18:00", amount: 30000000 },
        { date: "10/28", time: "18:01", amount: 33000000 },
        { date: "10/28", time: "18:02", amount: 36300000 },
      ]

    },
    // Add more items if needed
  ];
  const goBack = () => {
      navigate(-1);
  };

  return (
    <div >
        <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>경매</h1>
      </TitleGroup>
      {mockAuctionItems.map((item) => (
        <AuctionCard key={item.productId} item={item} />
      ))}
      <div className="margingray"></div>
      <BidInfo currentPrice={mockAuctionItems[0].currentPrice} currentBidders={mockAuctionItems[0].currentBidders} />
      <TransactionChart transactionVolume={mockAuctionItems[0].transactionVolume} bidHistory={mockAuctionItems[0].bidHistory} />
      <div className="margingray"></div>
      <div className="auction-container">
        <div className="next-bid-price">
          <span>다음 입찰 가격</span>
          <span className="price">{mockAuctionItems[0].nextBidPrice.toLocaleString()}원</span>
        </div>
        <div className="bid-note">
          <ul>
            <li>경매 특성상 현재 입찰가에 10%를 더한 금액으로 자동 책정돼요.</li>
            <li>더 빨리 입찰한 사람이 해당 입찰가에 입찰할 수 있어요.</li>
            <li>한 번 입찰 시 최소되지 않으니 신중히 입찰해주세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuctionProduct;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 20px;
  margin-left : 12px;
  margin-bottom: 30px;
  display: flex;
  justify-content: bottom;
  img {
    width: 10px;
    height: 16px;
    display: inline;
    margin-top: 7px;
    margin-right: 10px;
    transform: scaleX(-1);
  }

  h1 {
    display: inline;
    font-size: 25px;
    font-weight: var(--weight-semi-bold);
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    color: #000000;
  }
`;

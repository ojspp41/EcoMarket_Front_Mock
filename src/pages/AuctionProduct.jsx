import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "../css/pages/AuctionProduct.css";
import AuctionCard from "../components/AuctionCard";
import BidInfo from "../components/Detail/BidInfo";
import TransactionChart from "../components/Detail/TransactionChart";
import { getCategoryDisplayName } from "../utils/categoryMapping";
import mockAuctionLiveData from "../data/mockAuctionLiveData"; // ✅ 목데이터 import

const AuctionProduct = () => {
  const navigate = useNavigate();
  const { auctionId } = useParams(); // 경로에서 ID는 유지

  const [auctionData, setAuctionData] = useState(null);

  useEffect(() => {
    // 목데이터로 설정
    setAuctionData(mockAuctionLiveData);
  }, [auctionId]);

  const goBack = () => navigate(-1);

  const handleFakeBid = () => {
    alert(`${auctionData.canBidPrice.toLocaleString()}원에 입찰되었습니다 (목데이터입니다).`);
    navigate('/product/1')
  };

  if (!auctionData) return <div>로딩 중...</div>;

  const {
    productName,
    productDescription,
    auctionCategory,
    startBidPrice,
    topBidPrice,
    canBidPrice,
    numOfBidders,
    top3BidDatePriceList,
    bidVolumeResponseList,
  } = auctionData;

  const displayCategory = getCategoryDisplayName(auctionCategory);

  return (
    <div>
      <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="뒤로가기" onClick={goBack} />
        <h1>경매</h1>
      </TitleGroup>

      <AuctionCard
        item={{
          productId: auctionId,
          productName,
          productDescription,
          auctionCategory: displayCategory,
          startPrice: startBidPrice,
          imageUrl: "/assets/picture1.svg",
          currentPrice: topBidPrice,
        }}
      />

      <div className="margingray"></div>

      <BidInfo currentPrice={topBidPrice} currentBidders={numOfBidders} />

      <TransactionChart
        transactionVolume={bidVolumeResponseList}
        bidHistory={top3BidDatePriceList.map(({ bidDate, bidPrice }) => ({
          date: bidDate.split(" ")[0],
          time: bidDate.split(" ")[1],
          amount: bidPrice,
        }))}
      />

      <div className="margingray"></div>

      <div className="auction-container">
        <div className="next-bid-price">
          <span className="label">다음 입찰 가격</span>
          <span className="price">{canBidPrice.toLocaleString()}원</span>
        </div>
        <div className="bid-note">
          <ul>
            <li>경매 특성상 현재 입찰가에 10%를 더한 금액으로 자동 책정돼요.</li>
            <li>더 빨리 입찰한 사람이 해당 입찰가에 입찰할 수 있어요.</li>
            <li>한 번 입찰 시 최소되지 않으니 신중히 입찰해주세요.</li>
          </ul>
        </div>
      </div>

      <BidButton onClick={handleFakeBid}>
        {canBidPrice.toLocaleString()}원에 입찰하기
      </BidButton>
    </div>
  );
};

export default AuctionProduct;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 20px;
  margin-left: 12px;
  margin-bottom: 30px;
  display: flex;
  img {
    width: 10px;
    height: 16px;
    margin-top: 7px;
    margin-right: 10px;
    transform: scaleX(-1);
    cursor: pointer;
  }

  h1 {
    font-size: 25px;
    font-weight: var(--weight-semi-bold);
  }
`;

const BidButton = styled.button`
  width: 90%;
  height: 60px;
  margin: 20px auto 100px;
  display: block;
  background-color: #1b1b1b;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

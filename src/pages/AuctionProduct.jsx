import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import styled from "styled-components";
import "../css/pages/AuctionProduct.css";
import BidInfo from "../components/Detail/BidInfo";
import TransactionChart from "../components/Detail/TransactionChart";

const AuctionProduct = () => {
  const navigate = useNavigate();
  const { auctionId } = useParams();
  const [auctionData, setAuctionData] = useState(null);

  useEffect(() => {
    const memberId = Cookies.get('memberId'); // 쿠키에서 memberId 가져오기
    const accessToken = Cookies.get('accessToken'); // 쿠키에서 accessToken 가져오기

    if (!memberId || !accessToken) {
      console.error("Missing memberId or accessToken. Redirecting to login.");
      navigate('/login');
      return;
    }

    const socket = new SockJS("wss://ecomarket-cuk.shop/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      { Authorization: `Bearer ${accessToken}` },
      () => {
        console.log("WebSocket connected");

        // 회원 구독 요청
        stompClient.subscribe(
          `/sub/members/${memberId}`,
          (message) => {
            const data = JSON.parse(message.body);
            console.log("Member subscription data:", data);
            // 필요한 데이터 처리 로직 추가
          }
        );

        // 경매 구독 요청
        stompClient.subscribe(
          `/sub/auctions/${auctionId}`,
          (message) => {
            const data = JSON.parse(message.body);
            console.log("Auction subscription data:", data);
            setAuctionData(data);
          }
        );
      },
      (error) => {
        console.error("WebSocket connection error:", error);
      }
    );

    return () => {
      stompClient.disconnect(() => {
        console.log("WebSocket disconnected");
      });
    };
  }, [auctionId, navigate]);

  const goBack = () => {
    navigate(-1);
  };

  if (!auctionData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>경매</h1>
      </TitleGroup>
      {/* 아래에 auctionData를 사용해 렌더링 */}
      <div className="auction-container">
        <BidInfo
          currentPrice={auctionData.currentPrice}
          currentBidders={auctionData.currentBidders}
        />
        <TransactionChart
          transactionVolume={auctionData.transactionVolume}
          bidHistory={auctionData.bidHistory}
        />
      </div>
      <BidButton>
        {auctionData.nextBidPrice.toLocaleString()}원에 입찰하기
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
`;

const BidButton = styled.button`
  width: 90%;
  height: 60px;
  margin: 20px auto;
  display: block;
  background-color: #1b1b1b;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 100px;
`;

import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import styled from "styled-components";
import "../css/pages/Profile.css";
import AuctionItem from "../components/AuctionItem";
import mockAuctionData from "../data/mockAuctionData";
function Profile() {

  const navigate = useNavigate(); // useNavigate 훅 사용
  const auctions = mockAuctionData;
  const steps = [
    { icon: "/assets/check-payment.svg", label: "송금 확인", count: 0 },
    { icon: "/assets/prepare-delivery.svg", label: "배송 준비중", count: 1 },
    { icon: "/assets/delivering.svg", label: "배송중", count: 2 },
  ];

  const handleNavigate = () => {
    navigate("/previous-bids"); // 원하는 경로로 이동
  };
  const handleSearch= () => {
    navigate("/search-bids"); // 원하는 경로로 이동
  };
  return (
    <div className="co">
      <Container>
        <TitleGroup>
          <h1>상품 등록</h1>
        </TitleGroup>

        <Form>
            <div className="recent-auctions-header">
              <label>배송 중인 물품</label>
              <span className="view-all-text">
                조회하기 <span className="greater-sign"  onClick={handleSearch}>&gt;</span>
              </span>
              
            </div>
          <GuideGroup>
          <StepsContainer>
            {steps.map((step, index) => (
              <Step key={index}>
                <Circle>
                  <img src={step.icon} alt={step.label} />
                </Circle>
                <StepLabel>
                  {step.label}
                  <StepCount>{step.count}개</StepCount>
                </StepLabel>
              </Step>
            ))}
          </StepsContainer>
          </GuideGroup>
        </Form>

        {/* 경매 목록 섹션 */}
        <div className="recent-auctions">
            <div className="recent-auctions-header">
              <h2 className="recent-auctions-titles">입찰 중인 물품</h2>
              <span className="view-all-text">
                이전 입찰 내역 <span className="greater-sign"  onClick={handleNavigate}>&gt;</span>
              </span>
              
            </div>
            <div className="auction-list">
              {auctions.length > 0 ? (
                auctions.map((auction) => (
                  <AuctionItem auction={auction} key={auction.productId} /> 
                ))
              ) : (
                <p style={{ margin: '30px 0', fontWeight: 'bold', fontSize: '16px' }}>
                  현재 진행 중인 경매가 없습니다.
                </p>
              )}
            </div>
        </div>

        
      </Container>
      <Divider />
      {/* 로그아웃 및 회원탈퇴 섹션 */}
      <AccountSection>
        <AccountItem>로그아웃</AccountItem>
        <AccountItem>회원탈퇴</AccountItem>
      </AccountSection>
    </div>
  );
}

export default Profile;
const Divider = styled.div`
  width: ca;
  height: 31px;
  background-color: #D9D9D9;
`;
const AccountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30px;
  margin-top: 30px;
`;

const AccountItem = styled.div`
  font-size: 15px;
  font-weight: 600; /* semibold */
  color: rgba(27, 27, 27,0.8);
`;

// styled-components
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 20px 10px 20px;
  font-family: "Pretendard", sans-serif;
  .sectionTitle {
    width: 100%;
    text-align: left;
    font-family: "Pretendard";
    font-size: 17px;
    font-weight: bold;
    margin: 36px 0px 20px 0px;
  }
  .two {
    margin-top: 20px !important;
  }
`;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: bottom;
  img {
    size: 25px;
    transform: scaleX(-1);
    display: inline;
    margin-right: 10px;
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
const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;
  padding: 10px 0px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  margin-bottom: 5px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const StepLabel = styled.div`
  text-align: center;
  font-size: 14px;
  
  font-weight: bold;
  color: black;
`;

const StepCount = styled.div`
  font-size: 12px;
  color: #333;
  
  font-weight: 100;
  margin-top: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  label {
    font-size: 18px;
    font-weight: bold;
  }
`;

const GuideGroup = styled.div`
  width: 100%;
  height: 146px;
  background-color: rgba(27, 27, 27, 0.05); /* #1b1b1b 색상에 5% 투명도 */
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;




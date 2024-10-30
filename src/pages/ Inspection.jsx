import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mockUpcomingAuctions from "../data/mockUpcomingAuctions";

function Inspection() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [productPhotos, setProductPhotos] = useState([]); // 최대 3장까지 선택 가능
  const [productInfo, setProductInfo] = useState("");

  const navigate = useNavigate();

  const isFormComplete = () => {
    return (
      productName &&
      category &&
      startPrice &&
      productPhotos.length > 0 &&
      productInfo
    );
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && productPhotos.length + files.length <= 3) {
      const photoURLs = files.map((file) => URL.createObjectURL(file));
      setProductPhotos([...productPhotos, ...photoURLs].slice(0, 3)); // 최대 3개까지만 저장
    }
  };

  const goBack = () => {
    navigate("/uploadlist");
  };

  return (
    <Container>
      <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>상품 등록</h1>
      </TitleGroup>

      <label>상품 검수 과정</label>
      <GuideGroup>
        <StepContainer>
          <CircleWrapper>
            <img src="/assets/etcpage/money.svg" alt="시작가 검토" />
          </CircleWrapper>
          <ArrowIcon>
            <img src="/assets/etcpage/Vector.svg" alt="" />
          </ArrowIcon>
          <CircleWrapper>
            <img src="/assets/etcpage/eye.svg" alt="상품 검토" />
          </CircleWrapper>
          <ArrowIcon>
            <img src="/assets/etcpage/Vector.svg" alt="" />
          </ArrowIcon>
          <CircleWrapper>
            <img src="/assets/etcpage/thumb.svg" alt="검수 완료" />
          </CircleWrapper>
        </StepContainer>
      </GuideGroup>

      <label className="sectionTitle">경매중인 내 상품</label>
      <AuctionItemWrapper>
        {mockUpcomingAuctions.map((auction) => (
          <SellingItem auction={auction} />
        ))}
      </AuctionItemWrapper>
    </Container>
  );
}

export default Inspection;

// styled-components
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 30px 20px 30px;
  font-family: "Pretendard", sans-serif;
  padding-bottom: 180px; /* 하단에 추가 공간을 확보하여 스크롤 가능하도록 설정 */
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

const GuideGroup = styled.div`
  width: 100%;
  max-width: 330px;
  height: 146px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
`;

const CircleWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuctionItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ArrowIcon = styled.span`
  font-size: 30px;
  color: black;
`;

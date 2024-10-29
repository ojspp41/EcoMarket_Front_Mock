import React, { useState } from "react";
import mockAuctionData from "../data/mockAuctionData"; // import mock auction data
import mockUpcomingAuctions from "../data/mockUpcomingAuctions"; // import mock upcoming auctions
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SellingItem from "../components/SellingItem";

function UploadList() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [productPhoto, setProductPhoto] = useState(null);
  const [productInfo, setProductInfo] = useState("");

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const isFormComplete = () => {
    return productName && category && startPrice && productPhoto && productInfo;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductPhoto(URL.createObjectURL(file));
    }
  };

  const goToUpload = () => {
    if (isFormComplete()) {
      navigate("/upload");
    }
  };

  return (
    <Container>
      <TitleGroup>
        <h1>상품 등록</h1>
      </TitleGroup>

      <Form>
        <label>상품 등록 과정</label>
        <GuideGroup>
          <StepContainer>
            <CircleWrapper>
              <img src="url_to_image1" alt="시작가 검토" />
            </CircleWrapper>
            <ArrowIcon>{">"}</ArrowIcon>
            <CircleWrapper>
              <img src="url_to_image2" alt="상품 검토" />
            </CircleWrapper>
            <ArrowIcon>{">"}</ArrowIcon>
            <CircleWrapper>
              <img src="url_to_image3" alt="검수 완료" />
            </CircleWrapper>
          </StepContainer>
        </GuideGroup>
      </Form>

      <SubmitButton>
        검수 중인 상품 보러가기
        <img src="/assets/etcpage/slash.svg" alt="" />
      </SubmitButton>

      <label className="sectionTitle">경매중인 내 상품</label>
      <AuctionItemWrapper>
        {mockUpcomingAuctions.map((auction) => (
          <SellingItem auction={auction} />
        ))}
      </AuctionItemWrapper>

      <label className="sectionTitle two">경매 완료된 내 상품</label>
      <AuctionItemWrapper>
        {mockUpcomingAuctions.map((auction) => (
          <SellingItem auction={auction} />
        ))}
      </AuctionItemWrapper>

      <CircleButton>+</CircleButton>
    </Container>
  );
}

export default UploadList;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  label {
    font-size: 15px;
    font-weight: bold;
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

const ArrowIcon = styled.span`
  font-size: 30px;
  color: black;
`;

const AuctionItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: var(--weight-bold);
  cursor: not-allowed;
  margin-top: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const CircleButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--color-point1);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

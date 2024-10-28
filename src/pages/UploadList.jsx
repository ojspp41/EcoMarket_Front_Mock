import React, { useState } from "react";
import mockAuctionData from "../data/mockAuctionData"; // import mock auction data
import mockUpcomingAuctions from "../data/mockUpcomingAuctions"; // import mock upcoming auctions
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

      <label>경매중인 내 상품</label>
      <div className="upcoming-auction-list">
        {mockUpcomingAuctions.map((auction) => (
          <UpcomingAuctionItem auction={auction} key={auction.id} />
        ))}
      </div>
    </Container>
  );
}

export default UploadList;

// styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 30px 20px 30px;
  font-family: "Pretendard", sans-serif;
  padding-bottom: 180px; /* 하단에 추가 공간을 확보하여 스크롤 가능하도록 설정 */
`;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  select,
  textarea {
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &.filled {
      border-color: var(--color-main);
    }

    &::placeholder {
      color: #cccccc;
    }
  }

  textarea {
    height: 220px;
  }

  select {
    height: 51px;
  }

  .subLabel {
    margin: 5px 0px 10px 0px;
    font-size: 10px;
    color: black;
    text-align: left;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: left;
`;

const PhotoLabel = styled.label`
  width: 110px;
  height: 110px;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlusIcon = styled.span`
  font-size: 50px;
  color: black;
`;

const GuideGroup = styled.div`
  width: 100%;
  max-width: 370px; /* 최대 너비를 370px로 제한 */
  height: 146px;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* 상하좌우 여백 */
  margin: 0 auto; /* 중앙 정렬을 위해 좌우 여백 자동 */
  box-sizing: border-box; /* 패딩 포함한 크기 계산 */

  @media (max-width: 430px) {
    padding-left: 30px; /* 작은 화면에서도 좌우 30px 패딩 유지 */
    padding-right: 30px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CircleWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid white; /* 흰색 테두리 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white; /* 원 내부 배경 흰색 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 원 내부에 맞춰짐 */
  }
`;

const ArrowIcon = styled.span`
  font-size: 30px;
  color: black;
  margin: 0 28px; /* 원과 원 사이의 거리 */
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 86px;
  width: 370px;
  padding: 15px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: var(--weight-bold);
  cursor: not-allowed;
  margin-top: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: var(--color-main);
    color: white;
    cursor: pointer;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mockUpcomingAuctions from "../data/mockUpcomingAuctions";
import SellingItem from "../components/SellingItem";
import "../css/components/SearchContainer.css";

function Search() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [productPhotos, setProductPhotos] = useState([]); // 최대 3장까지 선택 가능
  const [productInfo, setProductInfo] = useState("");

  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && productPhotos.length + files.length <= 3) {
      const photoURLs = files.map((file) => URL.createObjectURL(file));
      setProductPhotos([...productPhotos, ...photoURLs].slice(0, 3)); // 최대 3개까지만 저장
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>상품 등록</h1>
      </TitleGroup>

      <InputGroup>
        <input
        type="text"
        className="search-input"
        placeholder="원하는 물품을 검색해보세요!"
        />
        <img src="/assets/Search.svg" alt="search" className="search-icon" />
      </InputGroup>

      <AuctionItemWrapper>
        {mockUpcomingAuctions.map((auction) => (
          <SellingItem auction={auction} />
        ))}
      </AuctionItemWrapper>
    </Container>
  );
}

export default Search;

// styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 30px 20px 30px;
  font-family: "Pretendard", sans-serif;
  padding-bottom: 180px;
`;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
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

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;

  input,
  select,
  textarea {
    padding: 12px;
    padding-right: 40px; /* 아이콘 공간 확보를 위해 오른쪽 패딩 추가 */
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    width: 100%;

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
    margin: 2px 0px 10px 0px;
    font-size: 12px;
    color: black;
    text-align: left;
  }

  .search-icon {
    position: absolute;
    right: 18px; /* input의 오른쪽에서 18px */
    top: 50%;
    transform: translateY(-50%); /* 상하 중앙 정렬 */
    width: 20px;
    height: 20px;
  }
`;

const AuctionItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

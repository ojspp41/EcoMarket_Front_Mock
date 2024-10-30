import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
    navigate("/uploadlist");
  };

  return (
    <Container>
      <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>상품 등록</h1>
      </TitleGroup>

      <InputGroup>
        <label>희망 시작 가격</label>
        <input
          type="text"
          placeholder="경매를 시작할 희망 시작 가격을 입력해주세요."
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
          className={startPrice ? "filled" : ""}
        />
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
    margin: 2px 0px 10px 0px;
    font-size: 12px;
    color: black;
    text-align: left;
  }
`;
const AuctionItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

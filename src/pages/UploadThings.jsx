import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GetAddress from "../api/GetAddress";

function UploadThings() {
  // 각각의 input 상태를 관리하기 위한 state
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [productPhoto, setProductPhoto] = useState("");
  const [productInfo, setProductInfo] = useState("");

  const navigate = useNavigate();

  // 모든 필드가 채워졌는지 확인하는 함수
  const isFormComplete = () => {
    return name && nickname && zipcode && address && detailAddress;
  };

  // 페이지 이동 함수
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
        <InputGroup>
          <label>상품명</label>
          <input
            type="text"
            placeholder="경매에 표시될 상품명을 입력해주세요."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={productName ? "filled" : ""}
          />
        </InputGroup>

        <InputGroup>
          <label>카테고리 선택</label>
          <input
            type="text"
            placeholder="상품 카테고리 선택"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={category ? "filled" : ""}
          />
        </InputGroup>

        <AddressGroup>
          <label>희망 시작 가격</label>
          <div className="address-row">
            <input
              type="text"
              placeholder="우편번호"
              className={`zipcode ${photo ? "filled" : ""}`}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            {/* <button onClick={}>검색하기</button> 사진 가져오는 무언가 */}
          </div>
        </AddressGroup>

        <InputGroup>
          <label>희망 시작 가격</label>
          <div className="address-row">
            <input
              type="text"
              placeholder="우편번호"
              className={`zipcode ${photo ? "filled" : ""}`}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            {/* <button onClick={}>검색하기</button> 사진 가져오는 무언가 */}
          </div>
        </InputGroup>

        <GuideGroup>
          <label>상품 검수 과정</label>
          <div className="guideBlock">
            <div className="chapter">
              <img src="aa" />
              시작가 검토
            </div>
            <div className="chapter">
              <img src="bb" />
              상품 검토
            </div>
            <div className="chapter">
              <img src="cc" />
              검수 완료
            </div>
          </div>
        </GuideGroup>
      </Form>

      <SubmitButton
        className={isFormComplete() ? "active" : ""}
        onClick={isFormComplete() ? goToUpload : null}
      >
        {isFormComplete() ? "시작하기" : "내용을 모두 입력해주세요!"}
      </SubmitButton>
    </Container>
  );
}

export default UploadThings;

// styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 20px 20px 20px;
  font-family: "Pretendard", sans-serif;
`;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 30px;

  h1 {
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
  gap: 55px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    height: 51px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &.filled {
      border-color: var(--color-main); /* 텍스트가 있을 때 border 색 변경 */
    }

    &::placeholder {
      color: #cccccc;
    }
  }
`;

const AddressGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  .address-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    .zipcode {
      flex: 2;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      font-size: 14px;
      width: 368px;
      height: 51px;
    }

    button {
      flex: 1;
      padding: 12px;
      background-color: black;
      color: white;
      border: none;
      font-family: "Pretendard";
      height: 51px;
      border-radius: 10px;
      font-size: 14px;
      cursor: pointer;
    }
  }

  input {
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    height: 51px;

    &::placeholder {
      color: #cccccc;
    }
  }
`;

const GuideGroup = styled.div``;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 16px;
  width: 370px;
  padding: 15px;
  background-color: #f2f2f2;
  color: black;
  border: none;
  border-radius: 10px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: var(--weight-bold);
  cursor: not-allowed;
  margin-top: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: var(
      --color-main
    ); /* 모든 입력 필드가 채워지면 배경색 변경 */
    color: white; /* 모든 입력 필드가 채워지면 글자색 변경 */
    cursor: pointer;
  }
`;

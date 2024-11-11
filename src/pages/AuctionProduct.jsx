import { useEffect, useState } from "react";

import SearchBar from '../components/SearchContainer';
import "../css/pages/Auction.css";
import auchor_categories from '../data/auchor_categories';
import AuctionItem from '../components/AuctionItem';
import UpcomingAuctionItem from '../components/UpcomingAuctionItem';
import mockUpcomingAuctions from '../data/mockUpcomingAuctions';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const AuctionProduct = () => {
  const navigate = useNavigate();


  const goBack = () => {
    navigate("/auction");
  };
  return (
    <div className="container">
        <TitleGroup>
        <img src="/assets/etcpage/Vector.svg" alt="" onClick={goBack} />
        <h1>경매</h1>
      </TitleGroup>

    </div>
  );
};

export default AuctionProduct;

const TitleGroup = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 20px;

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

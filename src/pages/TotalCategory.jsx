import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TopBar from '../components/TopBar';
import AuctionItem from '../components/AuctionItem';
import { getCategoryDisplayName } from '../utils/categoryMapping';
import mockAuctionData from '../data/mockAuctionData'; // ✅ 추가

const categoryMapping = {
  "그림": "PAINTING",
  "음반": "RECORD",
  "악기": "INSTRUMENT",
  "신발": "SHOES",
  "의류": "CLOTHING",
  "전자": "ELECTRONICS",
  "주얼리": "JEWELRY",
  "가방": "BAGS",
  "계절템": "SEASONAL_ITEMS",
  "한정판": "LIMITED_EDITION"
};

export const TotalCategory = () => {
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const mappedCategory = categoryMapping[selectedCategory] || selectedCategory;

    const filteredAuctions = mockAuctionData
      .filter((auction) => auction.auctionCategory === selectedCategory)
      .map((auction) => ({
        ...auction,
        auctionCategory: getCategoryDisplayName(auction.auctionCategory),
      }));

    setAuctions(filteredAuctions);
  }, [selectedCategory]);

  return (
    <div className="container">
      <TopBar text={`${selectedCategory} 전체보기`} />
      {auctions.length > 0 ? (
        auctions.map((auction) => (
          <AuctionItem key={auction.productId} auction={auction} />
        ))
      ) : (
        <p style={{ margin: '30px 0', fontWeight: 'bold', fontSize: '16px' }}>
          현재 진행 중인 경매가 없습니다.
        </p>
      )}
    </div>
  );
};

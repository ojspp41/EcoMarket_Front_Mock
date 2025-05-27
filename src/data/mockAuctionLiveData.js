const mockAuctionLiveData = {
  productName: "모나리자",
  productDescription: "레오나르도 다빈치의 대표 작품입니다.",
  auctionCategory: "그림",
  startBidPrice: 50000,
  topBidPrice: 85000,
  canBidPrice: 93500, // topBidPrice의 10% 증가
  numOfBidders: 42,
  top3BidDatePriceList: [
    { bidDate: "2025-05-27 11:00:00", bidPrice: 85000 },
    { bidDate: "2025-05-27 10:45:00", bidPrice: 77000 },
    { bidDate: "2025-05-27 10:30:00", bidPrice: 70000 },
  ],
  bidVolumeResponseList: [
    { date: "2025-05-25", volume: 12 },
    { date: "2025-05-26", volume: 18 },
    { date: "2025-05-27", volume: 22 },
  ],
};

export default mockAuctionLiveData;

const mockProductDetail = {
  productId: 1,
  productName: "모나리자",
  productDescription: "레오나르도 다빈치의 대표 작품",
  auctionCategory: "그림",
  images: [
    "/assets/picture1.svg",
    "/assets/picture2.svg",
    "/assets/picture3.svg"
  ],
  sellerNickname: "레오나르도",
  endTime: "2025-06-01 12:00:00",
  numOfBidders: 125,
  top3BidDatePrice: [
    { bidDate: "2025-05-27 10:00:00", bidPrice: 100000 },
    { bidDate: "2025-05-27 09:00:00", bidPrice: 95000 },
    { bidDate: "2025-05-26 20:00:00", bidPrice: 90000 },
  ],
  bidVolumeByDate: [
    { date: "2025-05-25", volume: 10 },
    { date: "2025-05-26", volume: 20 },
    { date: "2025-05-27", volume: 30 },
  ],
};

export default mockProductDetail;

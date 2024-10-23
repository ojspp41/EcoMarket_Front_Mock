import axios from 'axios';
import React, { useState, useEffect } from 'react';

function GetAddress() {
  const [addressData, setAddressData] = useState(null);

  const addressApiKey = process.env.REACT_APP_ADDRESS_API_KEY;
  const returnUrl = "http://localhost:5173/register";


  useEffect(() => {
    const findAddress = async () => {
        console.log("findaddress");
      try {
        const response = await axios.get('https://business.juso.go.kr/addrlink/addrLinkUrl.do', {
          confmKey: addressApiKey,
          returnUrl: returnUrl,
          resultType: '4', // 도로명+지번+상세건물명
        });
        setAddressData(response.data);
      } catch (error) {
        console.error('주소 검색 실패:', error.response ? error.response.data : error.message);
        alert('주소 검색 중 문제가 발생했습니다. 콘솔에서 자세한 오류를 확인해주세요.');
      }
    };

    findAddress();
  }, []);

  return <div>{addressData ? '주소 검색 성공' : '주소 검색 중입니다...'}</div>;
}

export default GetAddress;

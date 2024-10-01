import React from 'react';
import '../css/components/Navbar.css'; // CSS를 별도 파일로 관리합니다.

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <img src="/assets/navicon1.svg" alt="Icon 1" className="nav-icon" />
        <span className="nav-text">등록</span>
      </div>
      <div className="nav-item">
        <img src="/assets/navicon2.svg" alt="Icon 2" className="nav-icon" />
        <span className="nav-text">검색</span>
      </div>
      <div className="nav-item">
        <img src="/assets/navicon3.svg" alt="Icon 3" className="nav-icon" />
        <span className="nav-text">프로필</span>
      </div>
    </div>
  );
};

export default Navbar;
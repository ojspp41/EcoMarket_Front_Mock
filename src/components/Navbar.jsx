import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅
import '../css/components/Navbar.css'; // CSS를 별도 파일로 관리합니다.

const Navbar = () => {
  const [active, setActive] = useState('경매'); // 기본 활성 아이콘 설정
  const navigate = useNavigate();

  const handleClick = (name, path) => {
    setActive(name); // 아이콘 상태 업데이트
    navigate(path); // 페이지 이동
  };

  return (
    <div className="navbar">
      <div className="nav-item" onClick={() => handleClick('등록', '/register')}>
        <img
          src={active === '등록' ? '/assets/navicon1active.svg' : '/assets/navicon1.svg'}
          alt="Icon 1"
          className="nav-icon"
        />
        <span className="nav-text">등록</span>
      </div>
      <div className="nav-item" onClick={() => handleClick('경매', '/')}>
        <img
          src={active === '경매' ? '/assets/navicon2active.svg' : '/assets/navicon2.svg'}
          alt="Icon 2"
          className="nav-icon"
        />
        <span className="nav-text">경매</span>
      </div>
      <div className="nav-item" onClick={() => handleClick('프로필', '/profile')}>
        <img
          src={active === '프로필' ? '/assets/navicon3active.svg' : '/assets/navicon3.svg'}
          alt="Icon 3"
          className="nav-icon"
        />
        <span className="nav-text">프로필</span>
      </div>
    </div>
  );
};

export default Navbar;

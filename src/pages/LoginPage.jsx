import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
  const [clicked, setIsClicked] = useState(false);
  const [logoing, setIsLogoing] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();

  const goToHome = () => {
    if (validateEmail(username)) {
      setCookie('username', username, 7);
      navigate('/');
    }
  };

  const handleLoginClick = () => {
    setIsClicked(!clicked);
  };

  // 3초 후 logoing을 false로 설정하며, 그 전에 fade-out 상태로 전환 (스플래시 페이지)
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // fade-out 시작
      setTimeout(() => {
        setIsLogoing(false); // 로고 화면 비활성화
      }, 1000); // fade-out 애니메이션이 끝난 후 로고를 숨김
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 스플래시 */}
      {logoing && (
        <SplashContainer
          className={`second ${fadeOut ? 'fade-out' : ''}`}
          style={{ zIndex: 999 }}
        >
          <Slogan>
            <p>에코마켓</p>
            <p>슬로건</p>
          </Slogan>
          <MainLogo>에코마켓</MainLogo>
        </SplashContainer>
      )}

      <Container>
        <MainDiv>
          <MainText>앱 안내 문구</MainText>
        </MainDiv>
        <LoginButton>
          카카오 로그인 버튼
        </LoginButton>
      </Container>
    </>
  );
}

export default LoginPage;

// styled-components

const SplashContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 932px;
  background-color: #1feb58;
  color: white;
  text-align: left;
  z-index: 999;
  opacity: 1;
  transition: opacity 1s ease-out;

  &.fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
`;

const Slogan = styled.div`
  position: absolute;
  top: 72px;
  left: 48px;
  font-size: 32px;
  line-height: 1.5;
  font-weight: bold;
`;

const MainLogo = styled.div`
  position: absolute;
  bottom: 65px;
  right: 52px;
  font-size: 32px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
  background-color: white;
  text-align: center;
  z-index: 1;
`;

const MainDiv = styled.div`
  width: 378px;
  height: 413px;
  background-color: #d9d9d9;
  border-radius: 20px;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainText = styled.p`
  font-size: 18px;
  color: black;
`;

const LoginButton = styled.button`
  width: 378px;
  height: 76px;
  background-color: #d9d9d9;
  border-radius: 20px;
  border: none;
  position: absolute;
  bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;

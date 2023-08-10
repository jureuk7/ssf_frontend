import styled from "@emotion/styled";
import Background from "../assets/background.png";
import arrowDown from "../assets/WelcomeDown.svg"

const Welcome = (props) => {
  const clickToMove = () => {
    const {offsetTop} = props.aboutSSF.current;
    console.log(props.aboutSSF);
    window.scrollTo({behavior: "smooth", top: offsetTop - 100});
  };

  return (
      <MainScreen>
        <MainScreencontainer>
          <MainScreenTexts>
            <SubTitle>2023 소프트웨어 나눔 축제</SubTitle>
            <MainScreenTitle>"함께 나누고 성장하는 소프트웨어의 향연, <br/>  소프트웨어 나눔 축제로 행복을 만들어요!"</MainScreenTitle>
          </MainScreenTexts>
        </MainScreencontainer>
        <MoreInfoButton onClick={() => {clickToMove()}}>
            더 알아보기
            <Icon src={arrowDown} />
        </MoreInfoButton>
        <IconBackground
            src={Background}
        />
      </MainScreen>
  );
}

const IconBackground = styled.img`
  position: absolute;
  bottom: 100px;
  width: 1100px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1130px){width: 672px}
  @media (max-width: 700px){width: 440px}
`;
export const SubTitle = styled.div`
  color: var(--primary);
  font-size: 32px;
  font-weight: 600;
  @media (max-width: 1130px) {
    font-size: 23px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
const MainScreen = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  margin-top: 60px;
  padding: 60px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(235, 254, 255, 0.46) 33.85%, #D6F0FF 98.44%);
`;
const MainScreencontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin-top: 100px;
  gap: 125px;
  @media (max-width: 1130px) {
    margin-top: 150px;
  }
`;
const MainScreenTexts = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MainScreenTitle = styled.div`
  height: 198px;
  color: var(--gray500);
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2.64px;
  @media (max-width: 1130px) {
    font-size: 45px;
  }
  @media (max-width: 700px) {font-size: 35px}
`;

const MoreInfoButton = styled.button`
  color: var(--gray-500, #262A2E);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -1.44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
`;

export default Welcome;

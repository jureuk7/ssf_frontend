import styled from "@emotion/styled";
import BackgroundDesk from "../../assets/images/Background.svg";
import BackgroundMobile from "../../assets/images/BackgroundMobile.svg";
import arrowDown from "../../assets/icons/WelcomeDown.svg"
import Instagram from "../../assets/icons/instagram.svg";
import Play from "../../assets/icons/play_arrow.svg";


const Welcome = ({sc,setModal,modal}:any) => {

  return (
      <MainScreen>
        <MainScreenContainer>
          <MainScreenTexts>
            <SubTitle data-aos="fade-up">2023 소프트웨어 나눔 축제</SubTitle>
            <MainScreenTitle data-aos="fade-up">함께 나누고 성장하는 소프트웨어의 향연, <br/>  소프트웨어 나눔 축제로 행복을 만들어요!</MainScreenTitle>
          </MainScreenTexts>
          <ButtonContainer>
            <WatchVideoButton onClick={()=> setModal(!modal)}>
              <img src={Play} alt="재생 아이콘"/>
              홍보 영상 보기
            </WatchVideoButton>
            <InstagramButton href={"https://instagram.com/sunrin_ssf"} target={"_blank"}>
              <img src={Instagram} alt="인스타그램 아이콘"/>
              SSF 인스타그램
            </InstagramButton>
          </ButtonContainer>
        </MainScreenContainer>
        <MoreInfoButton onClick={sc}>
            더 알아보기
            <Icon alt="더 알아보기 버튼" src={arrowDown} />
        </MoreInfoButton>
        <IconBackgroundDesk
            src={BackgroundDesk}
            alt={"배경 이미지"}
        />
        <IconBackgroundMobile data-aos="fade-up"
                              alt={"배경 이미지"}
          src={BackgroundMobile}
        />
      </MainScreen>
  );
}


const WatchVideoButton = styled.button`
  display: flex;
  padding: 17px 32px 17px 26px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 50px;
  background: var(--gray500, #262A2E);
  color: var(--gray50, #FFF);
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  border: 0;
  &:hover {
    background: var(--gray400);
  }
`;

const InstagramButton = styled.a`
  display: flex;
  padding: 17px 32px 17px 26px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 50px;
  background: var(--gray50);
  color: var(--gray500);
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  border: 0;
  &:hover {
    background: var(--gray100);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media(max-width: 670px) {
    gap:16px;
    flex-direction: column;
    align-items: flex-start;
  }
`

const IconBackgroundDesk = styled.img`
  position: absolute;
  bottom: 100px;
  width: 60%;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 740px){display: none}
`;
const IconBackgroundMobile = styled.img`
  @media(max-width: 740px) {
    display: block;
    position: absolute;
    bottom: 100px;
    width: 300px;
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media(max-height: 900px) {width: 250px}
  @media(max-height: 800px) {width: 200px}
  @media(max-height: 720px) {width: 150px}
  @media(max-height: 630px) {display: none}
  display: none;
`;
export const SubTitle = styled.div`
  color: var(--primary);
  font-size: 32px;
  font-weight: 600;
  @media (max-width: 670px) {
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
const MainScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin-top: 100px;
  gap: 38px;
  @media (max-width: 1130px) {
    margin-top: 150px;
    @media(max-height: 845px) {margin-top: 100px;}
  }
  @media (max-width: 670px) {
    margin-top: 41px;
    align-items: flex-start;
    gap:37px;
    align-self: flex-start;
    margin-left: 20px;
  }
`;
const MainScreenTexts = styled.div`
  width: 100%;
  display: flex;
  gap:10px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 670px) {
    align-items: flex-start;
    gap:10px;
  }
`;
const MainScreenTitle = styled.div`
  color: var(--gray500);
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2.64px;
  @media(max-width:1130px) {font-size: 55px};
  @media (max-width: 860px) {font-size: 45px}
  @media (max-width: 670px) {font-size: 35px;
  width: 300px;
  text-align: left;
  }
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
  cursor: pointer;
  @media(max-width: 740px) {font-size: 17px}
  &:hover {
    color: var(--gray-400, #262A2E);
    
  }
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
  
`;

export default Welcome;

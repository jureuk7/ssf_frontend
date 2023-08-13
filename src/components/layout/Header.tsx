import styled from "@emotion/styled";
import logoImg from '../../assets/images/logo.svg';
import threeLineImg from '../../assets/icons/ThreeLineImg.svg';
import xImg from '../../assets/icons/X.svg';
import { useEffect, useState} from "react";

interface HeaderProps {
  sc1: () => void;
  sc2: () => void;
  sc3: () => void;
  sc4: () => void;
  sc5: () => void;
}

const Header = ({sc1,sc2,sc3,sc4,sc5}:HeaderProps) => {
  const [nav, setNav] = useState(false);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
          setNav(window.scrollY > 100 ? true : false)
      );
    }
  }, []);

  return (
      <>
        <Desktop>
            <Container navBar={nav}>
              <Wrapper>
                  <LogoButton onClick={
                    () => {
                      window.scrollTo({behavior: "smooth", top: 0});
                    }
                  } ><Logo src={logoImg} alt={"logoImg"}/></LogoButton>
                  <Right>
                    <TextButtonList>
                      <TextButton onClick={sc1} >SSF 소개</TextButton>
                      <TextButton onClick={sc2}>캠프 목록</TextButton>
                      <TextButton onClick={sc3}>나눔축제 일정</TextButton>
                      <TextButton onClick={sc4}>자주 묻는 질문</TextButton>
                    </TextButtonList>
                    <ApplyButton onClick={sc5}>신청하기</ApplyButton>
                  </Right>
              </Wrapper>
            </Container>
        </Desktop>
        <Mobile>
          <Container navBar={nav}>
            <Wrapper>
              <LogoButton onClick={
                () => {
                  window.scrollTo({behavior: "smooth", top: 0});
                }
              } ><Logo src={logoImg} alt={"logoImg"}/></LogoButton>
              <ButtonList>
                <DetailsButton onClick={() => {setToggled(!toggled)}}>{
                  toggled ? <img src={xImg} alt="xImg"/>
                      : <img src={threeLineImg} alt="threeLineImg"/>
                }</DetailsButton>
              </ButtonList>
            </Wrapper>
          </Container>
          {/*<Temp enabled={toggled}>*/}
          {/*  <TempText>ㄷㅅㄷㅅㅅㅅㄷㅅㄷ</TempText>*/}
          {/*</Temp>*/}
          <TextButtonList enabled={toggled}>
            <div style={
              {
                marginTop: '10px',
              }
            }>
              <TextButton onClick={() => {
                sc1();
                setToggled(false);
              }} >SSF 소개</TextButton>
              <Line/>
            </div>
            <div>
              <TextButton onClick={() => {
                sc2();
                setToggled(false);
              }} >캠프 목록</TextButton>
              <Line/>
            </div>
            <div>
              <TextButton onClick={() => {
                sc3();
                setToggled(false);
              }} >나눔축제 일정</TextButton>
              <Line/>
            </div>
            <div>
              <TextButton onClick={() => {
                sc4();
                setToggled(false);
              }} >자주 묻는 질문</TextButton>
              <Line/>
            </div>
            <div>
              <TextButton onClick={() => {
                sc5();
                setToggled(false);
              }}>신청하기</TextButton>
            </div>
          </TextButtonList>
          <Back enabled={toggled} onClick={() => setToggled(false)}/>
        </Mobile>
      </>

  );
};
const Back = styled.div<{enabled?:boolean}>`
  position: fixed;
  top: 60px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.19); 
  transition: background-color 0.3s ease-in-out;
  z-index: 5;
  display: ${({enabled}) => enabled ? 'block' : 'none'};
`;

const Line = styled.div`
  height: 0.5px;
  width: 100%;
  background-color: var(--gray200);
  margin-top: 7px;
`;
const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;
const DetailsButton = styled.button`
  width: 20px;
  height: auto;
  border: 0;
  background: none;
`;
const Mobile = styled.div`
  display: none;
  @media(max-width: 740px){
    display: block;
    width: 100%;
    z-index: 10;
  }
`;
const Desktop = styled.div`
  @media(max-width: 740px) {display: none};
  width: 100%;
`;
const LogoButton = styled.button`
  width: auto;
  height: auto;
  border: 0 solid transparent;
  background-color: transparent;
  cursor: pointer;
`;
const Container = styled.header<{navBar?:boolean}>`
  position: fixed;
  top:0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${(props) => (props.navBar ? "rgba(255,255,255,0.8)" : "transparent")};
  transition: background-color 0.2s ease-in-out;
  backdrop-filter: blur(20px);
  border-bottom: ${props => props.navBar ? "0.5px solid #E2E8EC" : "none"};
`

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 45px;
  @media (max-width: 1130px) {padding: 0 40px;}
  @media (max-width: 740px) {padding: 0 20px;}
`;
const Logo = styled.img`
  width: 70.05px;
  height: 26px;
`;
const TextButtonList = styled.div<{enabled?:boolean}>`
  display: flex;
  gap: 20px;
  height: 100%;
  @media (max-width: 740px) {
    flex-direction: column;
    z-index: 8;
    position: fixed;
    max-height: ${({enabled}) => enabled ? '250px' : '0px'};
    transition: all 0.3s ease-in-out;
    padding: 0 26px;
    top: ${({enabled}) => enabled ? '60px' : '-390px'};
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    gap: 7px;
  }
`;
const TextButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: var(--gray500);
  background-color: transparent;
  border-radius: 6px;
  padding: 10px 12px;
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0,0,0,0.05)
  }
  @media(max-width: 740px) {
    display: flex;
    width: 100%;
    padding: 7.5px 10px;
    align-items: start;
  }
`;

const ApplyButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  color: var(--gray50);
  background-color: var(--primary);
  border-radius: 3px;
  display: flex;
  width: 82px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9)
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

export default Header;

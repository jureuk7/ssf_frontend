import styled from "@emotion/styled";
import logoImg from '../assets/logo.svg';
import XImg from '../assets/X.svg';
import ThreeLineImg from '../assets/ThreeLineImg.svg';
import {useEffect, useState} from "react";

const Header = (props) => {
  const [nav, setNav] = useState(false);
  const [toggled, setToggle] = useState(false);
  const clickToMove = (goal, num) => {
    const {offsetTop} = goal.current;
    if (num === 0) window.scrollTo({behavior: "smooth", top: 0});
    else if (num === 1) window.scrollTo({behavior: "smooth", top: offsetTop - 100});
    else if (num === 2) window.scrollTo({behavior: "smooth", top: offsetTop + 140});
    else if (num === 3) window.scrollTo({behavior: "smooth", top: offsetTop - 370})
    else window.scrollTo({behavior: "smooth", top: offsetTop - 70})
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
          setNav(window.scrollY > 100 ? true : false)
      );
    }
  }, []);


  return (
      <Container navBar={nav}>
        <Wrapper>
          <Desktop>
            <LogoButton onClick={() => {clickToMove(props.aboutSSF, 0)}}><Logo src={logoImg} alt={"logoImg"}/></LogoButton>
            <Right>
              <TextButtonList>
                <TextButton onClick={() => {clickToMove(props.aboutSSF, 1)}}>SSF 소개</TextButton>
                <TextButton onClick={() => {clickToMove(props.camp, 2)}}>캠프 목록</TextButton>
                <TextButton onClick={() => {clickToMove(props.schaedule, 3)}}>나눔축제 일정</TextButton>
                <TextButton onClick={() => {clickToMove(props.attend, 4)}}>자주 묻는 질문</TextButton>
              </TextButtonList>
              <ApplyButton/>
            </Right>
          </Desktop>
          <Mobile>
            <LogoButton onClick={() => {clickToMove(props.aboutSSF, 0)}}><Logo src={logoImg} alt={"logoImg"}/></LogoButton>
            {toggled ? <AboutButton onClick={() => {setToggle(!toggled)}}><X src={XImg}/></AboutButton>
              :<AboutButton onClick={() => {setToggle(!toggled)}}><ThreeLine src={ThreeLineImg}/></AboutButton>}
          </Mobile>
          {toggled ?
            <>
              <DetailsContainer>
                <Details>
                  <DetailsButton line={true}>SSF소개</DetailsButton>
                  <DetailsButton line={true}>캠프 목록</DetailsButton>
                  <DetailsButton line={true}>나눔축제 일정</DetailsButton>
                  <DetailsButton line={true}>자주 묻는 질문</DetailsButton>
                  <DetailsButton line={false}>신청하기</DetailsButton>
                </Details>
                <Back onClick={() => {setToggle(!toggled)}}/>
              </DetailsContainer>
            </>

            :<></>}
        </Wrapper>
      </Container>
  );
};

const DetailsContainer = styled.div`
  display: none;
  @media(max-width: 740px) {
    border: 0;
    display: block;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.19);
    z-index: 2;
  }
`;
const Back = styled.button`
  display: none;
  @media(max-width: 740px) {
    border: 0;
    display: block;
    width: 100%;
    height: 100vh;
    background: none;
    z-index: 3;
  }
`;
const DetailsButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 0;
  color: var(--gray-500, #262A2E);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  border-bottom: ${props => props.line ? "0.5px solid #D6DCE1" : "none"};
  background-color: #FFFFFF;
  padding-bottom: 15px;
`;
const Details = styled.div`
  display: none;
  @media(max-width: 740px) {
    border: 0;
    display: flex;
    width: 100%;
    height: 277px;
    padding: 0px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 14.411141872406006px 13.527853965759277px 0px #BFBFBF;
    z-index: 3;
    background-color: #FFFFFF;
  }
`;
const X = styled.img`
  width: 14px;
  height: 14px;
`;
const ThreeLine = styled.img`
  width: 16px;
  height: 14px;
`;
const AboutButton = styled.button`
  border: 0;
  background: none;
  width: auto;
  height: auto;
`;
const Desktop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 740px) {display: none};
  
`;
const Mobile = styled.div`
  display: none;
  @media (max-width: 740px) {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    width: auto;
    height: 45px;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
  };
`;
const LogoButton = styled.button`
  width: auto;
  height: auto;
  border: 0 solid transparent;
  background-color: transparent;
  cursor: pointer;
`;
const Container = styled.header`
  position: fixed;
  top:0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${(props) => (props.navBar ? "rgba(255,255,255,1)" : "transparent")};
  transition: background-color 0.2s ease-in-out;
  backdrop-filter: blur(10px);
  border-bottom: ${props => props.navBar ? "1px solid var(--gray200)" : "none"};
`

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 45px;
  padding: 0 40px;
  @media (max-width: 740px) {padding: 0px;};
`;
const Logo = styled.img`
  width: 70.05px;
  height: 26px;
`;
const TextButtonList = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
`;
const TextButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: var(gray500);
  background-color: transparent;
  border-radius: 6px;
  padding: 10px 12px;
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0,0,0,0.05)
  }
`;
const ApplyButton = () => {
  return(
      <Button>
        신청하기
      </Button>
  );
}
const Button = styled.button`
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
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

export default Header;

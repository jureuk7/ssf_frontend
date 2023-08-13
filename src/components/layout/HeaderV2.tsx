import styled from "@emotion/styled";
import logoImg from '../../assets/images/logo.svg';
import threeLineImg from '../../assets/icons/ThreeLineImg.svg';
import xImg from '../../assets/icons/X.svg';
import { useEffect, useState} from "react";


const HeaderV2 = () => {
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
  background-color:rgba(255,255,255,0.8);
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
export default HeaderV2;

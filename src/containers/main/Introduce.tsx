
import styled from "@emotion/styled";
import {SubTitle, Title, TitleContainer} from "../../components/layout/Atomic.tsx";
import Image1 from "../../assets/images/image1.webp";
import Image2 from "../../assets/images/image2.webp";

const Introduce = ({scRef}:any) => {
  return(
      <Container ref={scRef}>
        <Wrapper>
          <AboutSSFTexts>
            <TitleContainer left>
              <SubTitle data-aos="fade-up">행사 소개</SubTitle>
              <Title data-aos="fade-up">선린 소프트웨어<br/>나눔 축제란 무엇일까요?</Title>
            </TitleContainer>
            <TextGroup>
              <MainText data-aos="fade-up">선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된<br/>선린인터넷고등학교의 최대 축제 중 하나입니다. 먼저 소프트웨어를 경험한<br/>사람들이 미래 세대에게 소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를<br/>직접 만들고 체험해볼 수 있는 행사입니다</MainText>
              <MainText data-aos="fade-up">축제에는 수도권에 거주하는 모든 중학생들이 신청할 수 있으며, 학생들은 게임 개발,<br/>웹 및 서버 개발 등 다양한 소프트웨어 분야에 대해 체험해볼 수 있습니다.</MainText>
            </TextGroup>
          </AboutSSFTexts>
          <AboutSSFPictures>
            <Picture   data-aos="fade-up">
              <img src={Image1} alt="소프트웨어 나눔 축제" />
            </Picture>

            <Picture data-aos="fade-up" gap={"40px"}>
              <img src={Image2} alt="소프트웨어 나눔 축제" />
            </Picture>
          </AboutSSFPictures>
        </Wrapper>
      </Container>
  )
}





const TextGroup = styled.div`
  display: flex;
  gap: 35px;
  flex-direction: column;
  @media (max-width: 1130px){
    gap: 20px;
  }
  `;

const MainText = styled.div`
  color: #888D98;
  font-size: 19px;
  font-weight: 400;
  line-height: 150%; /* 34.5px */
  width: auto;
  height: auto;
  @media (max-width: 1130px) {
    font-size: 16px;
  }
`;

export default Introduce;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: auto;
  @media (max-width: 1130px) {
    max-width: 944px;
    padding: 120px 42px;
  }
  @media (max-width: 944px) {
    max-width: 760px;
    padding: 120px 42px;
  }
  @media(max-width: 740px) {
    flex-direction: column;
    gap: 50px;
    padding: 80px 20px;
  }
  `;


const Container = styled.section`
  width: 100%;
  margin: 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1130px) {
    margin: 80px 0;
  }
`;
const AboutSSFTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const AboutSSFPictures = styled.div`
  display: flex;
  gap: 24px;
  width: auto;
  height: auto;
`;
const Picture = styled.div<{gap?:string}>`
  width: 160px;
  height: 480px;
  overflow:hidden;
  margin-top: ${(props) => props.gap};
  @media (max-width: 900px) {
    width: 120px;
    height: 360px;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



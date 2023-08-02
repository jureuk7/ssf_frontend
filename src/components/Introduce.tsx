
import styled from "@emotion/styled";
import {SubTitle, Title, TitleContainer} from "./Atomic.tsx";

const Introduce = () => {
  return(
      <Container>
        <Wrapper>
          <AboutSSFTexts>
            <TitleContainer left>
              <SubTitle>행사 소개</SubTitle>
              <Title>선린 소프트웨어<br/>나눔 축제란 무엇일까요?</Title>
            </TitleContainer>
            <TextGroup>
              <MainText width={"620px"}>선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된<br/>선린인터넷고등학교의 최대 축제 중 하나입니다. 먼저 소프트웨어를 경험한<br/>사람들이 미래 세대에게 소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를<br/>직접 만들고 체험해볼 수 있는 행사입니다</MainText>
              <MainText width={"620px"}>축제에는 수도권에 거주하는 모든 중학생들이 신청할 수 있으며, 학생들은 게임 개발, 웹 및 서버 개발 등 다양한 소프트웨어 분야에 대해 체험해볼 수 있습니다.</MainText>
            </TextGroup>
          </AboutSSFTexts>
          <AboutSSFPictures>
            <Picture/>
            <Picture gap={"40px"}/>
          </AboutSSFPictures>
        </Wrapper>
      </Container>
  )
}

const TextGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  `;

const MainText = styled.div`
  color: #888D98;
  font-size: 19px;
  font-weight: 400;
  line-height: 150%; /* 34.5px */
  width: ${(props) => props.width};
  height: auto;
`;

export default Introduce;

const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  `;


const Container = styled.section`
  width: 100%;
  margin: 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Picture = styled.div`
  width: 160px;
  height: 480px;
  margin-top: ${(props) => props.gap};
  background-color: #D9D9D9;
`;

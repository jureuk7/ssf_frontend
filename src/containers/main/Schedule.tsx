import React from 'react';
import {TitleContainer, SectionTop, SectionDescription, SubTitle, Title, Container, Wrapper} from "../../components/layout/Atomic.tsx";
import ScdBackDesk from "../../assets/images/messagebox.svg";
import ScdBackMobile from "../../assets/images/messagebox-2.svg";
import styled from "@emotion/styled";

const Schedule = () => {
  return (
      <Container gray>
        <Wrapper>
          <SectionTop>
            <TitleContainer>
              <SubTitle data-aos="fade-up">캠프 일정</SubTitle>
              <Title data-aos="fade-up">캠프 일정은 어떻게 되나요?</Title>
            </TitleContainer>
            <SectionDescription data-aos="fade-up">소프트웨어 나눔 축제는 접수를 통해 참가자를 선정하고, 추후 나눔축제를 진행합니다.</SectionDescription>
          </SectionTop>
          <Group data-aos="fade-up">
            <TimeLine>
              <Circle color={"#38FFDC"}/>
              <Circle color={"#2AD4ED"}/>
              <Circle color={"#1EAFFD"}/>
            </TimeLine>
            <TextLine>
              <Desktop/>
              <Mobile/>
            </TextLine>
          </Group>
        </Wrapper>
      </Container>
  );
};

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 740px){flex-direction: row}
  `;

const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  height: 6px;
  border-radius: 20px;
  background: linear-gradient(90deg, #37FFDB 3.13%, #11A9FF 100%);
  @media (max-width: 1130px) {
    width: 651px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 840px) {
    width: 550px;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    width: 6px;
    height: 535px;
    background: linear-gradient(180deg, #37FFDB 3.13%, #11A9FF 100%);
  }
`;
const Circle = styled.div`
  display: inline-flex;
  background-color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: ${(props) => props.color} solid 4px;
  filter: drop-shadow(0px 0px 4px rgba(158, 215, 233, 0.38));
`;
const TextLine = styled.div``;
const TextContainer = styled.div`
  display: flex;
  background: url(${(props) => props.src});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 165px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 13px #EFF3F6;
  @media (max-width: 900px) {
    width: 236px;
    height: 148px;
  }
  @media (max-width: 840px) {
    width: 206px;
    height: 129px;
  }
  @media (max-width: 840px) {
    width: 206px;
    height: 93px;
  }
`;
const ScdTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 250px;
  position: relative;
  margin-top: 20px;
  @media (max-width: 840px) {
    width: 190px;
  }
  @media (max-width: 740px) {
    margin-top: 0;
    margin-left: 22px;
  }
`;
const ScdTitle = styled.div`
  font-family: SUIT, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #333;
  @media (max-width: 1130px){font-size: 26px}
  @media (max-width: 840px){font-size: 20px}
`;
const DiffColor = styled.span`
  color: ${(props) => props.color};
`;
const ScdText = styled.div`
  color: rgba(81, 87, 99, 0.81);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  @media (max-width: 1130px){font-size: 18px}
  @media (max-width: 840px){font-size: 14px}
`;
const Desktop = () => {
  return(
    <DesktopContainer>
      <TextContainer src={ScdBackDesk}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#2FD7CD"}>8월 21일</DiffColor> 접수 시작
          </ScdTitle>
          <ScdText>SSF 접수를 시작합니다.</ScdText>
        </ScdTexts>
      </TextContainer>
      <TextContainer src={ScdBackDesk}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#2AD4ED"}>8월 27일</DiffColor> 접수 종료
          </ScdTitle>
          <ScdText>참가자 선정, 안내문자 발송</ScdText>
        </ScdTexts>
      </TextContainer>
      <TextContainer src={ScdBackDesk}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#1EAFFD"}>9월 2일</DiffColor> SSF 진행
          </ScdTitle>
          <ScdText>캠프 별 나눔축제 진행</ScdText>
        </ScdTexts>
      </TextContainer>
    </DesktopContainer>

  )
};
const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1020px;
  margin-top: 30px;
  @media (max-width: 1130px){
    width: 913px;
  }
  @media (max-width: 900px) {
    width: 802px;
  }
  @media (max-width: 840px) {width: 722px}
  @media (max-width: 740px) {display: none}
`;
const Mobile = () => {
  return(
    <MobileContainer>
      <TextContainer src={ScdBackMobile}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#2FD7CD"}>8월 21일</DiffColor> 접수 시작
          </ScdTitle>
          <ScdText>SSF 접수를 시작합니다.</ScdText>
        </ScdTexts>
      </TextContainer>
      <TextContainer src={ScdBackMobile}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#2AD4ED"}>8월 27일</DiffColor> 접수 종료
          </ScdTitle>
          <ScdText>참가자 선정, 안내문자 발송</ScdText>
        </ScdTexts>
      </TextContainer>
      <TextContainer src={ScdBackMobile}>
        <ScdTexts>
          <ScdTitle>
            <DiffColor color={"#1EAFFD"}>9월 2일</DiffColor> SSF 진행
          </ScdTitle>
          <ScdText>캠프 별 나눔축제 진행</ScdText>
        </ScdTexts>
      </TextContainer>
    </MobileContainer>
  )
}
const MobileContainer = styled.div`
  display: none;
  @media (max-width: 740px) {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 590px;
  }
`;

export default Schedule;

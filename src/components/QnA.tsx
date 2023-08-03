import React from 'react';
import {Container, SectionDescription, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "./Atomic.tsx";
import styled from "@emotion/styled";
import QnACard from "./QnACard.tsx";

const QnA = () => {

  const items = [
    {
      question: "캠프 중복 지원이 가능한가요?",
      answer: "아니요! 캠프 중복지원은 불가능합니다 ㅠㅠ 캠프는 한 곳만 신청해주세요!",
    },
    {
      question: "캠프 중복 지원이 가능한가요?",
      answer: "아니요! 캠프 중복지원은 불가능합니다 ㅠㅠ 캠프는 한 곳만 신청해주세요!",
    },
    {
      question: "캠프 중복 지원이 가능한가요?",
      answer: "아니요! 캠프 중복지원은 불가능합니다 ㅠㅠ 캠프는 한 곳만 신청해주세요!",
    }
  ]
  return (
      <Container>
        <Wrapper>
          <SectionTop>
            <TitleContainer>
              <SubTitle>캠프 관련 QnA</SubTitle>
              <Title>자주 묻는 질문</Title>
            </TitleContainer>
            <SectionDescription>축제 관련 궁금한 점이 있으신가요? 자주 묻는 질문들을 모아봤어요!</SectionDescription>
          </SectionTop>
          <QuestionList>
            {
              items.map((item, i) => {
                return(
                    <QnACard key={i} question={item.question} answer={item.answer}/>
                )
              })
            }
          </QuestionList>
        </Wrapper>
      </Container>
  );
};

const QuestionList = styled.div`
  max-width: 1100px;
  width: 95vw;
  margin: 0 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  @media (max-width: 900px) {
    max-width: 700px;
  }
`;

export default QnA;

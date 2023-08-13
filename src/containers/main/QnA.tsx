import {Container, SectionDescription, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "../../components/layout/Atomic.tsx";
import styled from "@emotion/styled";
import QnACard from "../../components/main/QnACard.tsx";
import {questionData} from "../../data/question.ts";

const QnA = ({scRef}:any) => {


  return (
      <Container ref={scRef}>
        <Wrapper>
          <SectionTop>
            <TitleContainer>
              <SubTitle data-aos="fade-up">캠프 관련 QnA</SubTitle>
              <Title data-aos="fade-up">자주 묻는 질문</Title>
            </TitleContainer>
            <SectionDescription data-aos="fade-up">축제 관련 궁금한 점이 있으신가요? 자주 묻는 질문들을 모아봤어요!</SectionDescription>
          </SectionTop>
          <QuestionList data-aos={"fade-up"}>
            {
              questionData.map((item) => {
                return(
                    <QnACard key={item.id} question={item.question} answer={item.answer}/>
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
  width: 100%;
  margin: 0 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export default QnA;

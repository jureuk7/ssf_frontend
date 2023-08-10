import { useState } from 'react';
import arrowDown from "../../assets/icons/down.svg";
import arrowRight from "../../assets/icons/right.svg";
import styled from "@emotion/styled";

interface QnACardProps {
  question: string;
  answer: string;
}

const QnACard = ({question, answer}:QnACardProps) => {
  const [view, setView] = useState(false)
  return (
      <Container onClick={() => setView(!view)} enabled={
        view
      }>
        <Top>
          {question}
          <ArrowButton >
            {view ? <img src={arrowDown} alt="arrowDown"/> : <img src={arrowRight} alt="arrowRight"/>}
          </ArrowButton>
        </Top>
        {view ?
            <>
              <Bottom>
                <Answer>{answer}</Answer>
              </Bottom>
            </> : <></>
        }
      </Container>
  );
};
const Container = styled.div<{enabled?:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 30px;
  max-height: ${({enabled}) => enabled ? '1000px' : '100px'};
  border-radius: 14px;
  transition: all 0.3s ease-in-out;
  background-color: var(--background, #F6F8FA);
  cursor: pointer;
  &:hover {
    filter: brightness(0.97);
  }
  &:active {
    transform: scale(1.05)
  }
`;
const Answer = styled.div`
  color: var(--gray300);
  font-family: SUIT, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 770px) {font-size: 18px}
`;
const ArrowButton = styled.button`
  width: 24px;
  height: 24px;
  border: 0 solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  @media (max-width: 770px) {
    width: 18px;
    height: 18px;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  color: var(--gray400);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 770px) {font-size: 18px}
`;
const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default QnACard;

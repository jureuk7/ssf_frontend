import React, { useState } from 'react';
import arrowDown from "../assets/down.svg";
import arrowRight from "../assets/right.svg";
import styled from "@emotion/styled";

const QnACard = ({question, answer}) => {
  const [view, setView] = useState(false)
  return (
      <Container>
        <Top>
          {question}
          <ArrowButton onClick={() => setView(!view)}>
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 30px;
  border-radius: 14px;
  background-color: var(--background, #F6F8FA);
`;
const Answer = styled.div`
  color: var(--gray300);
  font-family: SUIT, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ArrowButton = styled.button`
  width: 24px;
  height: 24px;
  border: 0 solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  color: var(--gray400);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default QnACard;

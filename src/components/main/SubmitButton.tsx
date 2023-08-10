import styled from "@emotion/styled";

interface SubmitButtonProps {
    applicationPeriod: boolean;
}

const SubmitButton = ({applicationPeriod}: SubmitButtonProps) => {
    return (
        applicationPeriod ?
            <EnableButton  data-aos="fade-up">신청하러가기</EnableButton>
            :
            <DisableButton  data-aos="fade-up" disabled={true}>지금은 신청 기간이 아니에요</DisableButton>
    );
};

const EnableButton = styled.button`
  width: 598px;
  height: 81px;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--gray50);
  border: 1px #CACACA;
  font-weight: 600;
  font-size: 26px;
  @media (max-width: 740px) {
    width: 350px;
    font-size: 18px;
    height: 53px;
  }
`

const DisableButton = styled.button`
  width: 598px;
  height: 81px;
  border-radius: 10px;
  background-color: #ADADAD;
  color: var(--gray50);
  border: 1px #CACACA;
  font-weight: 600;
  font-size: 26px;
  @media (max-width: 740px) {
    width: 350px;
    font-size: 18px;
    height: 53px;
  }
`

export default SubmitButton;

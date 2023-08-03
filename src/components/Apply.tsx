import {Container, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "./Atomic.tsx";
import styled from "@emotion/styled";
import fromImage from "../assets/form.png";
import peopleIcon from "../assets/formIcons/people.svg";
import wayIcon from "../assets/formIcons/way.svg";
import resultIcon from "../assets/formIcons/result.svg";
import FormInformation from "./FormInformation.tsx";
import SubmitButton from "./SubmitButton.tsx";

const Apply = () => {
    return (
        <Container>
            <Wrapper>
                <SectionTop>
                    <TitleContainer>
                        <SubTitle>신청하기</SubTitle>
                        <Title>이제 신청해볼까요?</Title>
                    </TitleContainer>
                </SectionTop>
                <Row>
                    <FormImageContainer src={fromImage}/>
                    <FormInformationContainer>
                        <FormInformation
                            icon={peopleIcon}
                            title={'캠프 모집 인원'}
                            content={'한 동아리 캠프 당 모집 인원은 최대 10명이에요! 참가자에게는 나눔축제' +
                              '교재가 배송되며 교육 이후 수료증을 발급해드립니다'}
                        />
                        <FormInformation
                            icon={wayIcon}
                            title={'캠프 신청 방법'}
                            content={'해당 웹사이트에서 8월 21일부터 아래 신청하기 버튼이 활성화됩니다. 버튼을 눌러 연결되는 구글 폼에서 신청이 가능합니다'}
                        />
                        <FormInformation
                            icon={resultIcon}
                            title={'접수 결과 안내'}
                            content={'8월 27일 오후에 합격자들에 한해서 안내 문자가 발송될 예정이에요!'}
                        />
                    </FormInformationContainer>
                </Row>
                <Space />
                <SubmitButton applicationPeriod={false} />
            </Wrapper>
        </Container>
    );
};

const Row = styled.div`
    max-width: 1100px;
    width: 95vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FormImageContainer = styled.img`
  width: 449px;
  height: auto;
  @media (max-width: 1130px) {width: 350px}
`;

const FormInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
`;

const Space = styled.div`
    width: auto;
    height: 30px;
`;

export default Apply;

import {Container, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "../../components/layout/Atomic.tsx";
import styled from "@emotion/styled";
import fromImage from "../../assets/images/Form.svg";
import peopleIcon from "../../assets/icons/people.svg";
import wayIcon from "../../assets/icons/way.svg";
import resultIcon from "../../assets/icons/result.svg";
import FormInformation from "../../components/main/FormInformation.tsx";
import SubmitButton from "../../components/main/SubmitButton.tsx";

const Apply = ({scRef}:any) => {
    return (
        <Container ref={scRef}>
            <Wrapper>
                <SectionTop>
                    <TitleContainer>
                        <SubTitle data-aos="fade-up">신청하기</SubTitle>
                        <Title data-aos="fade-up">이제 신청해볼까요?</Title>
                    </TitleContainer>
                </SectionTop>
                <Row>
                    <FormImageContainer alt={"신청 일러스트"}    data-aos="fade-up" src={fromImage}/>
                    <FormInformationContainer>
                        <FormInformation
                            data-aos="fade-up"
                            icon={peopleIcon}
                            title={'캠프 모집 인원'}
                            content={'한 동아리 캠프 당 모집 인원은 최대 10명이에요! 참가자에게는 나눔축제' +
                              '교재가 배송되며 교육 이후 수료증을 발급해드립니다'}
                        />
                        <FormInformation
                            data-aos="fade-up"
                            icon={wayIcon}
                            title={'캠프 신청 방법'}
                            content={'해당 웹사이트에서 8월 21일부터 아래 신청하기 버튼이 활성화됩니다. 버튼을 눌러 연결되는 구글 폼에서 신청이 가능합니다'}
                        />
                        <FormInformation
                            data-aos="fade-up"
                            icon={resultIcon}
                            title={'접수 결과 안내'}
                            content={'8월 27일 오후에 합격자들에 한해서 안내 문자가 발송될 예정이에요!'}
                        />
                    </FormInformationContainer>
                </Row>
                <Space />
                <SubmitButton applicationPeriod={
                    new Date(2023, 7, 21, 13, 0, 0) < new Date()
                } />
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
    @media (max-width: 740px){justify-content: center}
`;

const FormImageContainer = styled.img`
  width: 449px;
  height: auto;
  @media (max-width: 1130px) {width: 350px}
  @media (max-width: 740px) {display: none}
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

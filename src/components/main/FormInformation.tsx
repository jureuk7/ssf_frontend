import styled from "@emotion/styled";
import Icon from "./Icon.tsx";

interface FormInformationProps {
    icon: string;
    title: string;
    content: string;
}

const FormInformation = ({icon, title, content}: FormInformationProps) => {
    return (
        <InformationContainer     data-aos="fade-up">
            <Icon src={icon} />
            <Title>{title}</Title>
            <Content>{content}</Content>
        </InformationContainer>
    );
};

const InformationContainer = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: Column;
  gap: 16px;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  color: var(--gray500);
`;
const Content = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  color: var(--gray300);
  line-height : 150%;
  @media (max-width: 900px){
    width: 300px;
  }
  @media (max-width: 750px){
    width: 100%;
  }
 `;


export default FormInformation;

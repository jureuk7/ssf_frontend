import styled from "@emotion/styled";

interface IconProps {
    src: string;
}

const Icon = ({src}:IconProps) => {
    return (
        <IconContainer>
            <IconImage src={src} alt="icon"/>
        </IconContainer>
    );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: var(--gray100);
  border: 1px solid var(--gray200);;
  border-radius: 10px;
`;

const IconImage = styled.img`
    width: 24px;
    height: 24px;
`;

export default Icon;

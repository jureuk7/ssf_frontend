import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div<{gray?:boolean}>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.gray ? "var(--gray100)" : "var(--gray50)"};
`

export const Wrapper = styled.div<{flexable?: boolean}>`
  width: ${(props) => props.flexable ? "100%" : "1100px"};
  display: flex;
  padding: 180px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  @media (max-width: 1130px){
  width: ${(props) => props.flexable ? "100%" : "944px"};
  padding: 120px 40px;
  }
  @media (max-width: 944px) {
    width: ${(props) => props.flexable ? "100%" : "770px"};
    padding: 120px 40px;
  }
  @media (max-width: 770px) {
    width: 100%;
    padding: 120px 0;
  }
  @media (max-width: 740px) {
    width: ${(props) => props.flexable ? "100%" : "390px"};
    padding: 80px 20px;
  }
`;

export const Title = styled.div`
  color: var(--gray500, #262A2E);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  @media (max-width: 1140px) {
    font-size: 35px;
  }
  @media (max-width: 770px) {font-size: 25px};
`

export const TitleContainer = styled.div<{left?:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.left ? "flex-start" : "center"};
  gap: 10px;
`

export const SubTitle = styled.div`
  color: var(--primary, #30BFEB);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 1140px){font-size: 23px}
  @media (max-width: 770px){font-size: 20px}
  @media (max-width: 440px){font-size: 15px}
`;

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

export const SectionDescription = styled.div`
  color: var(--gary300, #888D98);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 1140px){
    font-size: 20px;
  };
  @media (max-width: 770px){font-size: 16px}
  @media (max-width: 440px){font-size: 12px;};
`

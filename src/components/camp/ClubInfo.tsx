import {Container} from "../layout/Atomic.tsx";
import styled from "@emotion/styled";
import {CampProps} from "../../data/camp.ts";
import Web from "../../assets/icons/web.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";

const ClubInfo = ({camp}:CampProps) => {
  return (
      <Container>
        <Wrapper>
          <ClubImageContainer>
            <ClubImage
                src={"/images/logo/"+camp.clubName+".svg"}
            />
          </ClubImageContainer>
          <CampInfoWrapper>
            <CampTop>
              <CampTitleContainer>
                <ClubName color={camp.clubColor}>동아리 소개</ClubName>
                <CampTitle>
                  어떤 동아리에서 진행할까요?
                </CampTitle>
              </CampTitleContainer>
              <TagContainer>
                {camp.clubTags.map((v, i) => (
                    <Tag key={i} subColor={camp.clubSubColor} color={camp.clubColor}>#{v}</Tag>
                ))}
              </TagContainer>
            </CampTop>
            <CampBottom>
              <Introduce>
                <Title>
                  동아리 소개
                </Title>
                <CampDetail>
                  {camp.clubInfo.split('\n').map((line:string) => {
                    return (<>{line}<br/></>)
                  })}
                </CampDetail>
              </Introduce>
              <LinkGroup>
                <WatchVideoButton>
                  <img src={Web} alt=""/>
                  동아리 웹사이트
                </WatchVideoButton>
                <WatchVideoButton>
                  <img src={Instagram} alt=""/>
                  인스타그램
                </WatchVideoButton>
                <WatchVideoButton>
                  <img src={Facebook} alt=""/>
                  페이스북
                </WatchVideoButton>
              </LinkGroup>

            </CampBottom>
          </CampInfoWrapper>
        </Wrapper>
      </Container>
  );
};

const LinkGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`

const WatchVideoButton = styled.button`
  display: flex;
  padding: 13px 22px 13px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 50px;
  color: var(--gray-500, #262A2E);
  background: var(--gray100, #FFF);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--gray200, #FFF);
  }
`;

const Title = styled.div`
  color: var(--gray-500, #262A2E);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
`;

const CampDetail = styled.div`
  color: var(--gray-400, #454D54);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

const CampBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  `;

const ClubImageContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 30px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px dashed var(--gray-200, #D6DCE1);
  background: var(--gray-200, #F6F8FA);
  `;


const CampTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const CampTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  `;

const ClubName = styled.div<{color:string}>`
  color: #D3242B;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.color};
  `;

const ClubImage = styled.img`
  width:160px;
  height:160px;
  `;

const Tag = styled.div<{color:string, subColor:string}>`
  display: flex;
  padding: 6px 21px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 110px;
  background : ${(props) => props.subColor};
  color: ${(props) => props.color};
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 28.5px */
`;


const CampTitle = styled.div`
  color: var(--gray-500, #262A2E);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  `;


const CampInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 51px;
`

const Wrapper = styled.div`
  display: flex;
  width: 1100px;
  padding: 165px 0px 125px 0px;
  align-items: flex-start;
  gap: 100px;
`

const CampImage = styled.img`
border-radius: 10px;
border: 1px solid var(--gray-200, #D6DCE1);
box-shadow: 0px 5px 13px 0px #EFF3F6;
width: 297px;
height: 419px;
flex-shrink: 0;
`;

export default ClubInfo;

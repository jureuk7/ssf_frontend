import {Container} from "../layout/Atomic.tsx";
import styled from "@emotion/styled";
import {CampProps} from "../../data/camp.ts";
import PlayIcon from "../../assets/icons/play.svg";

const CampInfo = ({camp}:{camp:CampProps}) => {
  return (
      <Container gray>
        <Wrapper>
          <CampImage
          src={"/images/camp/"+camp.clubName+".png"}
          />
          <CampInfoWrapper>
              <CampTop>
                <CampTitleContainer>
                  <ClubName color={camp.clubColor}>{camp.clubName}</ClubName>
                  <CampTitle>
                    {camp.campName.split('\n').map((line:string) => {
                      return (<>{line}<br/></>)
                    })}
                  </CampTitle>
                </CampTitleContainer>
                <TagContainer>
                  {camp.campTags.map((v, i) => (
                    <Tag key={i} color={camp.clubColor}>#{v}</Tag>
                  ))}
                </TagContainer>
              </CampTop>
              <CampBottom>
                <Introduce>
                  <Title>캠프 소개
                  </Title>
                  <CampDetail>
                    {camp.campInfo}
                  </CampDetail>
                </Introduce>
                <WatchVideoButton>
                  <img src={PlayIcon} alt=""/>
                  캠프 소개영상
                </WatchVideoButton>
              </CampBottom>
          </CampInfoWrapper>
        </Wrapper>
      </Container>
  );
};

const WatchVideoButton = styled.button`
  display: flex;
  padding: 13px 22px 13px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 50px;
  background: var(--gray-50, #FFF);
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
  @media(max-width: 940px) {font-size: 22px}
`;

const CampDetail = styled.div`
  color: var(--gray-400, #454D54);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 500px;
  @media(max-width: 940px) {
    width: 400px;
  }
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
  @media(max-width: 940px) {font-size: 22px}
  `;

const Tag = styled.div<{color:string}>`
  display: flex;
  padding: 6px 21px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 110px;
  background : ${(props) => props.color};
  color: var(--gray-50, #FFF);
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 28.5px */
  @media(max-width: 940px) {font-size: 17px;}
`;


const CampTitle = styled.div`
  color: var(--gray-500, #262A2E);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  @media(max-width: 940px){font-size: 35px}
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
  justify-content: center;
  @media(max-width: 940px) {
    width: 100%;
    gap: 30px;
  }
`

const CampImage = styled.img`
  border-radius: 10px;
  border: 1px solid var(--gray-200, #D6DCE1);
  box-shadow: 0px 5px 13px 0px #EFF3F6;
  width: 315px;
  height: 445px;
  flex-shrink: 0;
  @media(max-width: 1130px) {
    width: 297px;
    height: 419px;
  }
`;

export default CampInfo;

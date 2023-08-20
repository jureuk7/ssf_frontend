import styled from "@emotion/styled";
import {useNavigate} from "react-router";
import {CampProps} from "../../data/camp.ts";


interface Props {
  info: CampProps;
}

const CampCard = ({info}:Props) => {
  const navigate = useNavigate();
  return(
      <CardContainer onClick={() => navigate("/camp/"+info.id)}>
        <ClubImg alt={info.clubName+"캠프 이미지"} src={"/images/camp/"+info.clubName+".webp"}/>

        {info.campName.split('\n').map( (line:string,i:number) => {
          return (<CampTitle key={i}>{line}<br/></CampTitle>)
        })}
        <ClubName color={info.clubColor}>{info.clubName}</ClubName>
      </CardContainer>
  )
};

export default CampCard;
const CardContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 254px;
  border: 0;
  background: none;
  margin-top: 20px;
  padding: 0;
  margin: 0;
  @media (max-width: 900px) {
    width: 210px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ClubImg = styled.img`
  width: 100%;
  border: 1px solid #DAE1E8;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(200, 213, 222, 0.25);
  margin-bottom: 32px;
  margin-top: 10px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  &:hover {
    @media (max-width: 600px) {
      scale: 1;
    }
    cursor: pointer;
    filter: brightness(0.96);
    scale: 1.05;
  };
  
  @media (max-width: 900px) {
    margin-bottom: 20px;
    width: 210px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  
`;
const CampTitle = styled.div`
  color: var(--gray400, #454D54);
  text-align: center;
  font-size: 19.023px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
  letter-spacing: -1.141px;
  @media (max-width: 900px) {
    font-size: 16.023px;
  }
`;
const ClubName = styled.div`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 15.714px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 23.571px */
  letter-spacing: -0.943px;
  margin-top: 8px;
  @media (max-width: 600px) {
    font-size: 13.714px;
  }
`;

import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnAImg from '../assets/clubs/AnA.png'
import AppplePiImg from '../assets/clubs/AppplePi.png';
import EDCANImg from '../assets/clubs/EDCAN.png';
import EmotionImg from '../assets/clubs/Emotion.png';
import IWOPImg from '../assets/clubs/IWOP.png'
import Layer7Img from '../assets/clubs/Layer7.png';
import NEFUSImg from '../assets/clubs/NEFUS.png';
import RGImg from '../assets/clubs/RG.png'
import TeamLogImg from '../assets/clubs/TeamLog.png';
import UniFoxImg from '../assets/clubs/UniFox.png';
import Zer0penImg from '../assets/clubs/Zer0pen.png';
import CampCard from "./CampCard.tsx";
import {Container, SectionDescription, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "./Atomic.tsx";

const campInfo = [
  {
    name: 'AnA',
    img: AnAImg,
    title: 'Socket.io를 이용한\n나만의 카톡방 만들기',
    color: '#EDA12F'
  },
  {
    name: 'App:ple PI',
    img: AppplePiImg,
    title: 'Android Studio를이용한\n심리테스트 앱 만들기',
    color: '#D1272A'
  },
  {
    name: 'EDCAN',
    img: EDCANImg,
    title: 'Android Studio로\n나만의 퀴즈 앱 만들기',
    color: '#00A9CE'
  },
  {
    name: 'Emotion',
    img: EmotionImg,
    title: '외국에서 살아남자!\n:사진번역 AI모델 제작하기',
    color: '#3198D4'
  },
  {
    name: 'IWOP',
    img: IWOPImg,
    title: '웹을 나만의\n무대로 만들기',
    color: '#66DC3D'
  },
  {
    name: 'Layer7',
    img: Layer7Img,
    title: 'USB로 친구\n컴퓨터 해킹하기',
    color: '#666476'
  },
  {
    name: 'NEFUS',
    img: NEFUSImg,
    title: '누가봐도 좀~~멋있는\n투석기 RC카 만들기',
    color: '#3565DA'
  },
  {
    name: 'RG',
    img: RGImg,
    title: 'RG와 함께하는\n유니티의 슈팅게임',
    color: '#666CC1'
  },
  {
    name: 'TeamLog',
    img: TeamLogImg,
    title: 'Javacsript로 검 강화\n게임 만들기',
    color: '#F25827'
  },
  {
    name: 'UniFox',
    img: UniFoxImg,
    title: 'Python으로 만드는\n테트리스 게임',
    color: '#EC851A'
  },
  {
    name: 'Zer0pen',
    img: Zer0penImg,
    title: '유니티로 만드는\n스릴있는 점프게임',
    color: '#FFDA18'
  },
];

const CampList = () => {
  return (
      <Container gray>
        <Wrapper flexable>
          <CampTexts>
            <SectionTop>
              <TitleContainer>
                <SubTitle>캠프 목록</SubTitle>
                <Title>어떤 캠프가 있을까요?</Title>
              </TitleContainer>
              <SectionDescription>
                웹, 게임, 인공지능, IoT, 해킹까지 여러 분야의 멘토와 함께 소프트웨어 나눔 축제를 즐겨보세요!<br/>소프트웨어과, 정보보호과의 11개의 동아리 캠프가 준비되어있습니다!
              </SectionDescription>
            </SectionTop>
          </CampTexts>
          <Desktop/>
        </Wrapper>

      </Container>
  );
};

const CampTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: auto;
`;


const MainText = styled.div`
  color: #888D98;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%; /* 34.5px */
  width: ${(props) => props.width};
  height: auto;
`;


const StyledSwiper = styled(Swiper)`
  width: 1280px;
  height:570px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Desktop = () => {
  return(
      <>
        <StyledSwiper
            modules={[Pagination, Navigation]}
            className="banner"
            spaceBetween={3}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable: true}}
        >
          {[...Array(3)].map((_, i) => {
            return( <CardList key={i}
                              style={{
                                display:'flex',
                                gap:'25px',
                                justifyContent:'center'
                              }}
            >
              {[...Array(4)].map((_, j) => {
                const info = campInfo[i * 4 + j];
                if(!info) return null;
                return (
                    <CampCard color={info.color} img={info.img} name={info.name} title={info.title}/>
                );
              })}
            </CardList>)
          })}
        </StyledSwiper>
      </>
  )
};
const CardList = styled(SwiperSlide)`
  display: flex;
  align-items: flex-start;
  
`;


export default CampList;

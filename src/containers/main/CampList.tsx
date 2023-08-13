import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CampCard from "../../components/main/CampCard.tsx";
import {Container, SectionDescription, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "../../components/layout/Atomic.tsx";
import {campData as campInfo} from "../../data/camp.ts";



const CampList = ({scRef}:any) => {
  return (
      <Container gray ref={scRef}>
        <Wrapper flexable>
          <CampTexts>
            <SectionTop>
              <TitleContainer>
                <SubTitle data-aos="fade-up">캠프 목록</SubTitle>
                <Title data-aos="fade-up">어떤 캠프가 있을까요?</Title>
              </TitleContainer>
              <SectionDescription data-aos="fade-up">
                웹, 게임, 인공지능, IoT, 해킹까지 여러 분야의 멘토와 함께 소프트웨어 나눔 축제를 즐겨보세요!<br/>소프트웨어과, 정보보호과의 11개의 동아리 캠프가 준비되어있습니다!
              </SectionDescription>
            </SectionTop>
          </CampTexts>
          <Desktop data-aos="fade-up"/>
          <Tablet data-aos="fade-up"/>
          <Tablet2 data-aos="fade-up"/>
          <Mobile data-aos="fade-up"/>
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




const StyledSwiper = styled(Swiper)`
  max-width: 1280px;
  width: 95vw;
  height: 574px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1130px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
    height: 500px;
  }
  @media (max-width: 800px){
    width: 700px;
  }
  @media (max-width: 740px) {
    width: 570px;
  }
  @media (max-width: 590px){
    width: 530px;
  }
  @media (max-width: 550px){
    width: 336px;
    height: 450px;
  }
`;
const Desktop = () => {
  return(
      <DesktopContainer     data-aos="fade-up">
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
                    <CampCard
                      key={info.id}
                      info={info}/>
                );
              })}
            </CardList>)
          })}
        </StyledSwiper>
      </DesktopContainer>
  )
};

const Tablet = () => {
  return(
    <TableContainer>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(4)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center'
                            }}
          >
            {[...Array(3)].map((_, j) => {
              const info = campInfo[i * 3 + j];
              if(!info) return null;
              return (
                <CampCard key={info.id} info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </TableContainer>
  )
}
const Tablet2 = () => {
  return (
    <Tablet2Container>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(6)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center'
                            }}
          >
            {[...Array(2)].map((_, j) => {
              const info = campInfo[i * 2 + j];
              if(!info) return null;
              return (
                <CampCard key={info.id} info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </Tablet2Container>
  )
}
const Mobile = () => {
  return (
    <MobileContainer>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(11)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center',
                            }}
          >
            {[...Array(1)].map((_, j) => {
              const info = campInfo[i + j];
              if(!info) return null;
              return (
                <CampCard key={info.id} info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </MobileContainer>
  )
}

const TableContainer = styled.div`
  display: none;
  @media (max-width: 1130px) {display: block}
  @media(max-width:840px){display: none}
`;

const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 1130px) {display: block}
`;
const Tablet2Container = styled.div`
  display: none;
  @media(max-width:840px){display: block}
  @media(max-width:550px){display: none}
`;
const MobileContainer = styled.div`
  display: none;
  @media(max-width:550px){display: block}
`;

const CardList = styled(SwiperSlide)`
  display: flex;
  align-items: flex-start;

`;


export default CampList;

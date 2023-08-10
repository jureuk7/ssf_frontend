import styled from "@emotion/styled";
import SunrinLogo from '../../assets/icons/SunrinLogo.svg'
import InstagramLogo from '../../assets/icons/InstagramLogo.svg'

const Footer = () => {
  return (
      <Container>
        <Wrapper>
          <div>
            <Title margin={'21px'}>
              <Logo height={'29px'} src={SunrinLogo}/>
              선린인터넷고등학교
            </Title>
            <Contents>
              서울특별시 용산구 원효로97길 33-4 (청파동3가)<br/>
              Tel. 070-4459-9047 | Fax. 704-0960<br/><br/>

              © 2023. 선린인터넷고등학교<br/>
              All Rights Reserved.
            </Contents>
          </div>
          <div>
            <Title margin={'14px'}>웹사이트</Title>
            <SubTitle>디자인</SubTitle>
            <Contents margin={'18px'}>주현명 표한빈 이서율 윤휘영 이주영</Contents>
            <SubTitle>개발</SubTitle>
            <Contents>주현명 이서율 김성빈 유도윤</Contents>
          </div>
          <div>
            <Contents margin={'9.5px'}>
              <Logo height={'13px'} src={SunrinLogo}/> 선린 홈페이지
            </Contents>
            <Contents margin={'9.5px'}>
              <Logo height={'13px'} src={InstagramLogo}/> SSF 인스타그램
            </Contents>
          </div>
        </Wrapper>
      </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2E353C;
  @media(max-width: 740px) {
    height: 594px;
  }
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1130px){
    width: 994px;
    margin: 0 40px;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    height: 474px;
    margin: 0 30px;
  }
`;
const Title = styled.div<{margin?:string}>`
  color: #FBFBFB;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  display: flex;
  gap: 15px;
  margin-bottom: ${(props) => props.margin};
`;
const Logo = styled.img`
  height: ${(props) => props.height};
`;
const Contents = styled.div<{margin?:string}>`
  color: #FBFBFB;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  margin-bottom: ${(props) => props.margin};
`;
const SubTitle = styled.div`
  color: #FFF;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  margin-bottom: 6px;
`;

export default Footer;

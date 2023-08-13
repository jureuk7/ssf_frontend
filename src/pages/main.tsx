import {PageContainer} from "../components/layout/Atomic.tsx";
import Header from "../components/layout/Header.tsx";
import Welcome from "../containers/main/Welcome.tsx";
import Introduce from "../containers/main/Introduce.tsx";
import CampList from "../containers/main/CampList.tsx";
import Footer from "../components/layout/Footer.tsx";
import Schedule from "../containers/main/Schedule.tsx";
import QnA from "../containers/main/QnA.tsx";
import Apply from "../containers/main/Apply.tsx";
import React, {useEffect} from "react";
import Video from "../assets/video/SSF2023.mp4"
import styled from "@emotion/styled";
import Close from "../assets/icons/X.svg";

function Main() {

  const [modal,setModal] = React.useState(false);

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);

  function gotoScroll1() {
    if (ref1 !== null) {
      const { offsetTop } = ref1.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop -190});
    }
  }

  function gotoScroll2() {
    if (ref2 !== null) {
      const { offsetTop } = ref2.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  function gotoScroll3() {
    if (ref3 !== null) {
      const { offsetTop } = ref3.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop });
    }
  }

  function gotoScroll4() {
    if (ref4 !== null) {
      const { offsetTop } = ref4.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop + 40 });
    }
  }

  function gotoScroll5() {
    if (ref5 !== null) {
      const { offsetTop } = ref5.current as any;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 70 });
    }
  }

  useEffect(() => {
    if(modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);


  return (
      <>
      {
        modal && <ModalBackground>
      <ModalContainer>
        <ModalTop>
          <ModalTitle>2023 소프트웨어 나눔축제 홍보영상</ModalTitle>
          <CloseButton onClick={() => setModal(!modal)}>
            <img src={Close} alt=""/>
          </CloseButton>
        </ModalTop>
        <ModalVideo>
          <video controls src={Video}></video>
        </ModalVideo>
      </ModalContainer>
    </ModalBackground>
}
      <PageContainer>

        <Header
            sc1={gotoScroll1}
            sc2={gotoScroll2}
            sc3={gotoScroll3}
            sc4={gotoScroll4}
            sc5={gotoScroll5}
        />
        <Welcome
            sc={gotoScroll1}
            setModal={setModal}
            modal={modal}
        />
        <Introduce
            scRef={ref1}
        />
        <CampList
            scRef={ref2}
        />
        <Schedule
            scRef={ref3}
        />
        <QnA
            scRef={ref4}
        />
        <Apply
            scRef={ref5}
        />
        <Footer/>
      </PageContainer>
        </>
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalTop = styled.div`
  width: 100%;
  height: 60px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: #F5F5F5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #E0E0E0;
  }
`;

const ModalVideo = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;




export default Main;

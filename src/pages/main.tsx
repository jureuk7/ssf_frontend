import {PageContainer} from "../components/layout/Atomic.tsx";
import Header from "../components/layout/Header.tsx";
import Welcome from "../containers/Welcome.tsx";
import Introduce from "../containers/Introduce.tsx";
import CampList from "../containers/CampList.tsx";
import Footer from "../components/layout/Footer.tsx";
import Schedule from "../containers/Schedule.tsx";
import QnA from "../containers/QnA.tsx";
import Apply from "../containers/Apply.tsx";

function Main() {

  return (
      <PageContainer>
        <Header />
        <Welcome/>
        <Introduce/>
        <CampList/>
        <Schedule/>
        <QnA/>
        <Apply/>
        <Footer/>
      </PageContainer>
  )
}

export default Main;

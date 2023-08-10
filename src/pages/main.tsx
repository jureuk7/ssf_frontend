import {PageContainer} from "../components/layout/Atomic.tsx";
import Header from "../components/layout/Header.tsx";
import Welcome from "../containers/main/Welcome.tsx";
import Introduce from "../containers/main/Introduce.tsx";
import CampList from "../containers/main/CampList.tsx";
import Footer from "../components/layout/Footer.tsx";
import Schedule from "../containers/main/Schedule.tsx";
import QnA from "../containers/main/QnA.tsx";
import Apply from "../containers/main/Apply.tsx";

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

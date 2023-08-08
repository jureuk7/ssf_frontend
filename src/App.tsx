import {PageContainer} from "./components/Atomic.tsx";
import Header from "./components/Header.tsx";
import Welcome from "./components/Welcome.tsx";
import Introduce from "./components/Introduce.tsx";
import CampList from "./components/CampList.tsx";
import Footer from "./components/Footer.tsx";
import Schedule from "./components/Schedule.tsx";
import QnA from "./components/QnA.tsx";
import Apply from "./components/Apply.tsx";

function App() {

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

export default App

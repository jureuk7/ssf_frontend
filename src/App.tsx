import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Camp from "./pages/camp";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path={"/camp/:id"} element={<Camp/>}/>
      </Routes>
  );
}

export default App;

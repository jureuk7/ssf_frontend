import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Camp from "./pages/camp";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path={"/camp/:id"} element={<Camp/>}/>
      </Routes>
  );
}

export default App;

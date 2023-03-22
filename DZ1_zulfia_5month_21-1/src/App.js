import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Transit from "./components/transit/Transit";
import One from "./pages/one/One";
import Two from "./pages/two/Two";
import Three from "./pages/three/Three";
import Four from "./pages/four/Four";
import Five from "./pages/five/Five";


function App() {
  return (
    <BrowserRouter>
      <Transit/>
     <Routes>
       <Route index element={<One/>}/>
         <Route path="/second" element={<Two/>}/>
         <Route path="/third" element={<Three/>}/>
         <Route path="/fourth" element={<Four/>}/>
         <Route path="fifth" element={<Five/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;

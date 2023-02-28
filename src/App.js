import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./Formsource";
import { productInputs } from "./Formsource";
import { useContext } from "react";
import './Styles/Dark.scss';
import { darkMOde_context } from "./Context/Context";


function App() {
  const {darkMode} =useContext(darkMOde_context);
  return (
    <div className={darkMode ?'app Dark' : 'app'}>
      
     <BrowserRouter>
     <Routes>
     
      <Route path='/' element={<Home/>}></Route>
     
      <Route path='login' element={<Login/>}></Route>
      <Route path='users'>   
      <Route index element={<List/>}/>
      <Route path=':userid' element={<Single/>} />
      <Route path='new'  element={<New input={userInputs} Title='ADD new User'/>}/>
      </Route>
      <Route path='products'>   
      <Route index element={<List/>}/>
      <Route path=':productid' element={<Single/>} />
      <Route path='new'  element={<New  input={productInputs } Title='ADD new User'/>}/>
      </Route>
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

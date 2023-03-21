
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Pages/Header';
import WelCome from './components/Pages/Welcome';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import CompleteProfile from './components/Pages/CompleteProfle';
import NewPassword from './components/Pages/NewPassword';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { premiumActions } from './components/Store/premiumSlice';
import DownloadButton from './components/Pages/Download';


function App() {
  const themeMode = useSelector(state=> state.premium.showDarkTheme)
  const feature = useSelector(state => state.feature.showFeature)
  
  const dispatch = useDispatch()

  const darkModeHandler = () => {
    
      dispatch(premiumActions.toggleDarkMode())
    
    
    
  }
  
  return (
    <BrowserRouter>
    <div style={{background : themeMode ? 'grey' : 'white', height: '100vh'}} className=" ">
    <div  className="bg-blue-900 flex justify-end pl-2 pr-5 pt-5 text-white">{feature && <button onClick={darkModeHandler}>dark</button>}
    {feature && <DownloadButton/>}</div>
     <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<WelCome/>}/>
        <Route path='/completeprofile' element={<CompleteProfile/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
      </Route>
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

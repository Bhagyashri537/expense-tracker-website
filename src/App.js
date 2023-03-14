
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Pages/Header';
import WelCome from './components/Pages/Welcome';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import CompleteProfile from './components/Pages/CompleteProfle';
//import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<WelCome/>}/>
        <Route path='/completeprofile' element={<CompleteProfile/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;

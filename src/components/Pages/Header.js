
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    
    const isLoggedIn = useSelector(store => store.auth.isLoggedIn)
  
  return (
    <>
      <nav>
        <ul className="flex justify-end p-6 font-bold bg-blue-900 text-white">
           
          {/* { !isLoggedIn && 
          <li className="px-2 hover:text-orange-200 underline">
            <Link to={"/"}> Login </Link>
          </li>
           } 
           {
          <li className="px-2  hover:text-orange-200">
            <Link to={"/signup"}> signUp </Link>
          </li>
           } */}
         
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;

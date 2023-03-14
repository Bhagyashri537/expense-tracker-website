import { Outlet,Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <nav>
           <ul>
            
            <li>
            <Link to={"/login"}> Login  </Link>
            </li>
             
            <li>
            <Link to={"/signup"}> signUp  </Link>
            </li>
           
            
           </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Header;

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authAction } from "../Store/authSlice";
import Expense from "./Expenses";

const WelCome = () => {
  
  const navigate = useNavigate()
  
   const dispatch = useDispatch()
  
  const verifyEmail = () => {
    let token = localStorage.getItem('token')
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              let errMessage = "Authentication Failed, " + data.error.message;
              throw new Error(errMessage);
            }
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const logoutHandler = () => {
    dispatch(authAction.logout())
    localStorage.removeItem('key')
     navigate("/")

    
   
  }
  return (
    <div>
      <div className="flex justify-end pb-5 bg-blue-900 pr-5 font-bold hover:text-yellow-400 text-white" >
        <button onClick={logoutHandler}>LogOut</button>
        <button className="pl-3" onClick={verifyEmail}>Verify Email</button>
        
       
      </div>
      <div className="flex justify-end">
        <h3 className="float-left text-neutral-400">
          Your profile is incomplete{" "}
          <Link to="/completeprofile" className="underline">
            complete now
          </Link>
        </h3>
      </div>
      <div className="flex justify-center pt-10 ">
        <h2 className=" font-extrabold text-orange-400 pb-8 text-4xl">
          Welcome To Expense Tracker
        </h2>
       
      </div>
      <Expense/>
    </div>
  );
};
export default WelCome;

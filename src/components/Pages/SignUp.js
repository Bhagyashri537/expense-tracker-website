//import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../Store/authSlice";

const SignUp = () => {
  
  const emailref = useRef();
  const passwordref = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch()

  
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailref.current.value;
    const enteredPassword = passwordref.current.value;
    const confirmEnteredPassword = confirmPasswordRef.current.value;

    if (confirmEnteredPassword !== enteredPassword) {
      alert("password is not matched");
    }

    
    
    fetch( "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        confirmPassword: confirmEnteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
       
        if (response.ok) {
          
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;

              throw new Error(errorMessage);
            }

            console.log(data);
          });
        }
      })
      .then((data) => {
        // dispatch(authAction.updateAuthInfo({
        //   token : data.token,
        //   email : emailref.current.value
        // }))
        alert("signUp successful");
       
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
     <div className="bg-gradient-to-r from-pink-50 to-blue-200 ">
      <div className="flex flex-col items-center justify-center pt-32 pb-32   ">
       
        <div className="px-10 py-10 text-left bg-white border-2 border-indigo-300 shadow-lg pl-28 pr-28 rounded-lg">
          <h3 className="text-2xl font-bold text-center">
           SignUp
          </h3>
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  ref={emailref}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="on"
                  placeholder="******"
                  ref={passwordref}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="on"
                  placeholder="******"
                  ref={confirmPasswordRef}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  SignUp
                </button>
               
                  
              </div>
              
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};
export default SignUp;

import {  useRef } from "react"
import { Link } from "react-router-dom"


const NewPassword = () => {

   
    const emailref = useRef()

    const forgotPasswordHandler = (e) => {
        e.preventDefault()
        const enteredEmail = emailref.current.value;

 
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg", {
        method: 'POST',
        body: JSON.stringify({
            requestType: "PASSWORD_RESET" ,
            email: enteredEmail
        }), headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=>{
          if(res.ok){
              return res.json();
          }else{
              return res.json().then((data)=>{
                  if(data && data.error && data.error.message){
                      let errMessage = "Authentication Failed, " + data.error.message;
                      throw new Error(errMessage);
                  }
              })
          }
      }).then((data)=>{
        alert('passward reset link send to your mailbox')
        console.log(data);
      }).catch((err)=>{
        alert(err.message);
      })

      
    }
 
    

    return (
        <>
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/">
              Login here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                <div className="relative">
                  <input type="email" id="email" name="email" ref={emailref} className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"/>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button onClick={forgotPasswordHandler} type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">send link</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  </main>
        </>
        
    )
}
export default NewPassword;
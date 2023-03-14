
import { Link } from "react-router-dom";

const WelCome = () => {
  

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
  return (
    <div>
      <div className="flex justify-end">
        <h3 className="float-left text-neutral-400">
          Your profile is incomplete{" "}
          <Link to="/completeprofile" className="underline">
            complete now
          </Link>
        </h3>
      </div>
      <div className="flex justify-center pt-10 ">
        <h2 className=" font-extrabold text-orange-200">
          welcome to expense tracker
        </h2>
        <button onClick={verifyEmail}>Verify Email</button>
      </div>
    </div>
  );
};
export default WelCome;

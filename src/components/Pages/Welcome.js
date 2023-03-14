import { Link } from "react-router-dom";
const WelCome= () => {
    return (
        <div>
        <div className="flex justify-between">
            <h2>welcome to expense tracker</h2>
            <h3>Your profile is incomplete <Link to="/completeprofile">complete now</Link></h3>
        </div>
        </div>
    )
}
export default WelCome;
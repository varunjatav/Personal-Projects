import { useSelector } from "react-redux";
import { selectUser,selectUserToken } from "./authSlice";
import { Link } from "react-router-dom";


const Welcome = () => {
    const user = useSelector(selectUser)
    const token = useSelector(selectUserToken);

    const welcome = user ? `Welcome ${user}` : `Welcome!`;
    const tokenAbbr = `${token.slice(0,9)}...`

    const content = (
        <section className="welcome">
           <h1>{welcome}</h1>
           <p>Token: {tokenAbbr}</p>
           <p> <Link to="/usersList">Go to Users List</Link></p>
        </section>
    )
  return content
}

export default Welcome
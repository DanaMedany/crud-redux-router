import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logInOut } from "../state/authSlice";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logInOut());
    navigate("/");
  };

  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="post/add">Add Post</NavLink>
        </li>
        <Link className="login" onClick={handleLogin}>
          {isLoggedIn ? "LOGOUT" : "LOGIN"}
        </Link>
      </ul>
    </div>
  );
};

export default Header;

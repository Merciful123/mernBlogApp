import "./topbar.css";
import { Link } from "react-router-dom";
// import peace from "../../asset/images/peace.jfif";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <li className="topListItem ">
          <Link to={"/"} className="link">
            HOME
          </Link>
        </li>

        <li className="topListItem ">
          <Link to="write" className="link">
            WRITE
          </Link>
        </li>
        <li className="topListItem" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>
      </div>
      <div className="topCenter">
        <div className="topList "></div>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="img" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;

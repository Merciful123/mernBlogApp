import "./sidebar.css";
// import peace from "../../images/pic.webp";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        {/* <img src={peace} alt="" /> */}
        <p>Hi, I am Aamir Raza, learning MERN stack development skills.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

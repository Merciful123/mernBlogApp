import "./header.css";
import peace from "../../images/code.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN stack </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={peace} alt="" />
    </div>
  );
};

export default Header;

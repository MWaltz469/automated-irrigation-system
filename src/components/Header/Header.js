/** @jsx jsx */
import { jsx } from "theme-ui";
import "./Header.css";
import ThemePicker from "./ThemePicker/ThemePicker";

const Header = () => {
  return (
    <header sx={{ bg: "backgroundSecondary" }}>
      <h1 className="logo-text" sx={{ color: "text" }}>
        <img className="logo-image" src={require('../../assets/Logo_MW.png')} alt="logo" />
        HP Glacier Ver. 3.0
      </h1>
      <ThemePicker />
    </header>
  );
};

export default Header;

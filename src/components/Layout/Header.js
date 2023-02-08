import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import lapalomaImage from "../../assets/lapaloma.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Future Weeds</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={lapalomaImage}
          alt="Wouldst thou like to smoke deliciously?"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;

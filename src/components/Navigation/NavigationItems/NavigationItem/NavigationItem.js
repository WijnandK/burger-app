import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className={classes.NavigationItem}>
        <NavLink to={props.link} activeClassName={classes.active} exact>
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;

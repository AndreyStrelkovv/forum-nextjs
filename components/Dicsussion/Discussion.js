import Link from "next/link";
import React from "react";
import classes from "./Discussion.module.css";

const Discussion = () => {
  return (
    <Link href="/">
    <div className={classes.discussion}>
      <div className={classes.title}><h2>Discussion Title</h2></div>
      <div className={classes.description}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
      </div>
    </div>
    </Link>
  );
};

export default Discussion;

import Link from "next/link";
import React from "react";
import classes from "./Discussion.module.css";

const Discussion = (props) => {
  return (
    <Link href="/">
      <div className={classes.discussion}>
        <div>
          <h2 className={classes.title}>{props.title}</h2>
          <p className={classes.author}>{`Started by: ${props.author}`}</p>
        </div>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Discussion;

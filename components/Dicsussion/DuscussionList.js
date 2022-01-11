import React, { Fragment } from "react";
import Discussion from "./Discussion";

const DUMMY_DISCUSSIONS = [
  {
    title: "Lorem ipsum dolor sit",
    author: "Maxim Magnus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Duis aute irure",
    author: "Dante Fox",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Excepteur sint occaecat",
    author: "Libra Algerti",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const DuscussionList = () => {
  return (
    <Fragment>
      {DUMMY_DISCUSSIONS.map((discussion) => (
        <Discussion
          title={discussion.title}
          author={discussion.author}
          description={discussion.description}
        />
      ))}
    </Fragment>
  );
};

export default DuscussionList;

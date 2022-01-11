import React, { Fragment } from "react";
import Discussion from "./Discussion";



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

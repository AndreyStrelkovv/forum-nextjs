import React from 'react'
import classes from './Discussion.module.css'

const Discussion = () => {
  return (
    <div className={classes.discussion}>
      <div className={classes.title}>Discussion Title</div>
      <div className={classes.description}>Discussion Description</div>
    </div>
  )
}

export default Discussion

import React from 'react'
import PropTypes from 'prop-types'
import classes from "./Card.module.css"

function Card(props) {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

Card.propTypes = {}

export default Card

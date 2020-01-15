import React from 'react';
import './Box.css'

export default props => {
  return (
    <div className="box">{props.children}</div>
  )
}
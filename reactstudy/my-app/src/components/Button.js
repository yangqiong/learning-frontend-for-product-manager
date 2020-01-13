import React from "react";

// class Button extends React.Component {
//     render() {
//       return (
//       <div>{this.props.name}</div>
//       )
//     }
// }

function Button(props) {
  return <div> {props.name} </div>;
}

export default Button;

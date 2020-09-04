import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;

// import React from "react";
// import PropTypes from "proptypes";

// const Todo = (props) => {
//   return (
//     <div className="todo">
//       <span className="todo-text">{props.text}</span>
//     </div>
//   );
// };

// Todo.propTypes = {
//   text: PropTypes.String.isRequired
// };

// export default Todo;

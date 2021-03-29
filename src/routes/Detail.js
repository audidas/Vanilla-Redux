import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>{toDo.id}</h5>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return { toDo: state.find((todo) => todo.id === id) };
}

export default connect(mapStateToProps)(Detail);

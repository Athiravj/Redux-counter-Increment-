import React from "react";
import { addNo } from "../redux/buttonContainer/buttonAction";
import { connect } from "react-redux";

function AnswerContainer(props) {
  return (
    <div>
      <h2>{props.num}</h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNo: () => dispatch(addNo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer);

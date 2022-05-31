import React from "react";
import { addNo } from "../redux/buttonContainer/buttonAction";
import { connect } from "react-redux";

function BoxContainer(props) {
  return (
    <div>
      <button onClick={props.addNo}>Add</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer);

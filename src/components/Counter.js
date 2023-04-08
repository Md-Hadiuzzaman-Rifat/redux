import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/action";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <div className="compo">
        <h2>{count.toString()}</h2>
        <button onClick={increment}>Click Here</button>

        <br />

        <button onClick={decrement}>Click Here</button>
      </div>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        count: state.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

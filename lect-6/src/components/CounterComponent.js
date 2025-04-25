import React from "react";
import { connect } from "react-redux";

const CounterComponent = (props) => {
    return (
        <div>Значение счётчика: {props.count}</div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

export default connect(mapStateToProps)(CounterComponent);

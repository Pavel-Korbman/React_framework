import React from "react";
import { connect } from "react-redux";
import { increment } from "../reducers/counterSlice";

const ButtonComponent = (props)=>{
    return(
        <button onClick={props.increment}>Увеличить</button>
    );
};

const mapDispatchToProps = {
    increment
};

export default connect(null, mapDispatchToProps)(ButtonComponent);


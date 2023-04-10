import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action/action";


const Counter = () => {
    const count=useSelector((state)=>state.value)
    const dispatch=useDispatch()

    const incrementHandler=(value)=>{
        dispatch(increment(value))
    }

    const decrementHandler=(value)=>{
        dispatch(decrement(value))
    }

    return (
        <div className='counter'>
            <div className='compo'>
                <h2>{count}</h2>
                <button onClick={()=>incrementHandler(5)}>Increment</button>
                <button onClick={()=>decrementHandler(5)}>decrement</button>
            </div>
        </div>
    );
};

// const mapStateToProps=(state)=>{
//     return{
//         value: state.value
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         increment:(value)=>dispatch(increment(value)),
//         decrement:(value)=>dispatch(decrement(value))
//     }
// }

export default Counter

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
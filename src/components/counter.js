//import '../images';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {inc,dec,rnd} from '../actions';
import plus from '../images/plus.png';
import minus from '../images/Minus.png';

const Counter = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();
    return(
    <>
        <h1 className="d-flex justify-content-center">{count}</h1>
        <div className="d-flex justify-content-between but_group">
            <button onClick={() => dispatch(inc())}  type="button" className="btn inc">
            <div> 
                <img src={plus} alt="plus" />
            </div>
            </button>
            <button  onClick={() => dispatch(dec())}  type="button" className='btn dec'>
            <div>
                <img src={minus} alt="minus" />
            </div>
            </button>    
            <button onClick={() => dispatch(rnd())} type="button" className='btn rnd'>
            <div >Rand</div>
            </button>    
        </div>
    </>
    )
}

export default Counter;
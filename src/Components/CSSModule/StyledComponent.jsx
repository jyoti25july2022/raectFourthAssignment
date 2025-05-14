import React from 'react';
import styles from './StyledComponent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../reducer/counterSlice';

const StyledComponentCSSMODULE = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 className={styles.heading}>Redux Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default StyledComponentCSSMODULE;

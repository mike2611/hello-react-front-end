import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingReducer';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <h1>
      Greeting:
      {greeting[1]}
    </h1>
  );
};

export default Greeting;

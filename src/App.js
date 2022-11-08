import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, multiplyByAmount } from './redux/counter';

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Score: { value }</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <br></br>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      <button onClick={() => dispatch(multiplyByAmount(5))}>*5</button>
    </div>
  );
}

export default App;

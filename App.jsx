
import './styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  logIn,
  logOut
} from './helpers/helpers';

function App(props) {

  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  return (
    <>
   <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}
    </>
    );
}

export default App;

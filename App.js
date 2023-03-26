import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {

  const [count, setCount] = useState(1)
  const handlePlus = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="col-12 d-flex fixed-bottom justify-content-center"> 
      <h1 className="counter-text">
              {count}
            </h1>
      </div>
      <Login handleMinus={handleMinus} handlePlus={handlePlus} />
    </div>
  );
}


export default App;

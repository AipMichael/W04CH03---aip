import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import Info from "./components/Info/Info";
import Actions from "./Actions/Actions";
import { useState } from "react";
import Context from "./components/Context/Context";

function App() {
  const myKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "delete"];
  const [dialedNumber, setDialedNumber] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const displayDialedNumber = (event) => {
    if (dialedNumber.length < 9) {
      setDialedNumber([...dialedNumber, event.target.textContent]);
    } else {
      setIsDisabled(true);
    }
  };

  const deleteNumbers = (event) => {
    setDialedNumber([]);
  };

  const isCalling = (event) => {
    setIsDisabled(true);
  };

  return (
    <Context.Provider
      value={{ displayDialedNumber, deleteNumbers, isDisabled }}
    >
      <>
        <div className="container">
          <h1 className="main-title">My phone App</h1>
          <Info message={"...calling"} />
          <main className="phone">
            <div className="keyboard-container">
              <Keyboard myKeys={myKeys} isActive={true} />
            </div>
            <Actions dialedNumber={dialedNumber} />
          </main>
        </div>
      </>
    </Context.Provider>
  );
}

export default App;

import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import Info from "./components/Info/Info";
import Actions from "./Actions/Actions";
import { useState } from "react";
import Context from "./components/Context/Context";

function App() {
  const myKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "delete"];
  const [dialedNumber, setDialedNumber] = useState([]);

  const displayDialedNumber = (event) => {
    setDialedNumber([...dialedNumber, event.target.textContent]);
  };

  const deleteNumbers = (event) => {
    setDialedNumber([]);
  };

  /*   const actionOnClick = () => {
    console.log("hi-ho");
  }; */

  return (
    <Context.Provider value={{ displayDialedNumber, deleteNumbers }}>
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

import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import Info from "./Info/Info";
import Actions from "./Actions/Actions";

function App() {
  const myKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "delete"];

  const actionOnClick = () => {
    console.log("hi-ho");
  };

  return (
    <>
      <div className="container">
        <h1 className="main-title">My phone App</h1>
        <Info message={"...calling"} />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard
              myKeys={myKeys}
              actionOnClick={actionOnClick}
              isActive={true}
            />
          </div>
          <Actions />
        </main>
      </div>
    </>
  );
}

export default App;

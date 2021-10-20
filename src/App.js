import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import Info from "./Info/Info";

function App() {
  const myKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "delete"];

  const actionOnClick = () => {
    console.log("hi-ho");
  };

  return (
    <>
      <body>
        <div class="container">
          <Info message={"...calling"} />
          <Keyboard
            myKeys={myKeys}
            actionOnClick={actionOnClick}
            isActive={true}
          />
        </div>
      </body>
    </>
  );
}

export default App;

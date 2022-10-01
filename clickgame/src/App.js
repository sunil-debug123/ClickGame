import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [axis, setAxis] = useState([]);

  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('click', update)
      window.addEventListener('mousemove', update)
      return () => {
        window.removeEventListener('click', update)
        window.removeEventListener('mousemove', update)
      }
    },
    [setX, setY]
  )
  
  const handleClick = (e) => {
    axis.push({ x: e.clientX, y: e.clientY });
    hide();
  };

  const hide = () => {
    setTimeout(() => {
      axis.splice(0, 1);
    }, 4000);
  };
  return (
    <>
      <div onClick={handleClick}>
        <div
          className="App"
          style={{
            backgroundColor: "#282c34",
            color: "White",
            fontSize: "40px",
            border: "1px dotted white",
          }}
        >
          Click Game 😜
        </div>
        <header className="App-header">
          <>
            {axis.map((list) => {
              return (
                <div
                  style={{ position: "absolute", top: list.y, left: list.x }}
                >
                  😜
                </div>
              );
            })}
          </>
        </header>
      </div>
    </>
  );
}

export default App;

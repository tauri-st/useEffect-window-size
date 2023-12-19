import "./styles.css";
import { useState, useEffect } from "react";
/*Use useEffect to manage a side effect (window size) that
is outside of the scope of your component. To start, the number
of the screen size doesn't change*/
const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  /*1. Attach an event listener to the window object*/
  useEffect(() => {
    window.addEventListener("resize", windowResize);
  }, [])

  return (
    <div className="App">
      <p>Window width: {windowWidth}px</p>
    </div>
  );
};

export default App;

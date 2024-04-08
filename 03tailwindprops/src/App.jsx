import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "ramesh",
    age: 43
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      {/* <Card channel="Chai" someObj={myObj} someArr={newArr}/> */}
      <Card username="Chai" btnTxt="click me"/>
      <Card username="asur" btnTxt="visit me"/>
      <Card username="peo" />
    </>
  );
}

export default App;

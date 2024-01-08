import { useState } from "react";

import "./App.css";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "shivam",
    age: 21
  }
  let newArr = [1, 2, 4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>

        <Card username="shivam or react" btnText="click me" />
      
      
    </>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl py-2">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}>Red</button>

            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}>Green</button>

            <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "maroon" }}>Maroon</button>

            <button onClick={() => setColor("teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "teal" }}>Teal</button>

            <button onClick={() => setColor("magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "magenta" }}>Magenta</button>

            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}>Violet</button>

            <button onClick={() => setColor("aqua")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "aqua" }}>Aqua</button>

            <button onClick={() => setColor("burlywood")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "burlywood" }}>Burlywood</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

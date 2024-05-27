import { useState } from "react";
function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: color,
          width: "400px",
          height: "400px",
          marginLeft: "35%",
          marginTop: "60px",
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-2xl text-sky-200">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

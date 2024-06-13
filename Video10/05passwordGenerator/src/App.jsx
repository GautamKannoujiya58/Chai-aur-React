import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

import SendToWhatsApp from "./SendToWhatsApp";

function App() {
  const [length, setLength] = useState(8);
  console.log(length);
  const [numberChecked, setNumberChecked] = useState(false);
  const [characterChecked, setCharacterChecked] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef("null");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberChecked) str += "0123456789";
    if (characterChecked) str += "!@#$%^&*(){}<>?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberChecked, characterChecked, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberChecked, characterChecked, passwordGenerator]);

  const handleCopy = () => {
    passwordRef.current?.select();
    navigator.clipboard
      .writeText(password)
      .then(() => {
        console.log("coppied Password>>", password);
      })
      .catch((error) => console.log(error));
  };
  // console.log(password);

  return (
    <>
      <div className="w-full max-w-md  mx-auto shadow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-2 py-1">Generate password</h1>
        <div className="flex flex-shadow rounded-lg overflow-hidden mb-4 ">
          <input
            className="outline-none mb-0 w-full h-10 py-1 px-3 rounded-e-none"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={handleCopy}
            className="outline-none bg-blue-800 text-white h-10 w-16 hover:bg-sky-500"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 p-4 ">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberChecked}
              id="numberInput"
              onChange={() => {
                setNumberChecked((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterChecked}
              id="characterInput"
              onChange={() => {
                setCharacterChecked((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

      <SendToWhatsApp myPassword={password} />
    </>
  );
}

export default App;

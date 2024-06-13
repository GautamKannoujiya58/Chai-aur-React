import { useState } from "react";

export default function SendToWhatsApp({ myPassword }) {
  //   console.log(myPassword);
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");

  const directToWhatsApp = () => {
    if (number) {
      const url = `https://wa.me/${number}?text=${note}${": "}${encodeURIComponent(
        myPassword
      )}`;
      window.open(url, "_blank");
    } else {
      console.log("phone number is not entered");
      alert("Please enter the phone number");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 ">
          <h1 className=" ml-1 p-3 text-xl text-indigo-700">
            Send this password to your WhatsApp
          </h1>
          <input
            className="outline-none m-2 p-3 h-10 w-full rounded-2xl"
            placeholder="Enter note about your password"
            type="text"
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></input>
          <input
            className="outline-none m-2 p-3 h-10 rounded-2xl"
            placeholder="Enter your phone number"
            type="text"
            max={10}
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></input>
          <button
            onClick={directToWhatsApp}
            className="text-white bg-green-500 ml-2 p-2 rounded-2xl hover:bg-teal-500 c"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}

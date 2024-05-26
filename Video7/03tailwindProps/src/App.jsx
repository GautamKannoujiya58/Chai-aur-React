import "./App.css";
import Card from "./components/Card";

function App() {
  // let profileObj = {
  //   name: "Pavi",
  //   occupation: "Banker",
  //   hobby: "Hygiene",
  // };
  return (
    <>
      <h1 className="bg-green-700 rounded-md m-2">Tailwind CSS</h1>
      <Card username="Pavi" location="Mumbai" />
      <Card username="Gautam" location="Pune" />
    </>
  );
}

export default App;

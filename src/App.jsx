import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
  const [query, setQuery] = useState("");
  const [attributeList, setAttributeList] = useState(data);
  console.log(attributeList);

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className=' bg-slate-900 p-3'
    >
      <Navbar query={query} setQuery={setQuery} atrributeList={attributeList} />
    </div>
  );
}

export default App;

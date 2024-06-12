import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
  const [query, setQuery] = useState("");
  const [attributeList, setAttributeList] = useState(data);
  const [attributeName, setAttributeName] = useState("");
  const [operationList, setOperationList] = useState([]);
  const [operationName, setOperationName] = useState("");
  const [queryTag, setQueryTag] = useState([]);

  const handleAttributeList = (attribute) => {
    console.log(attribute, "hello");
    setAttributeName(attribute);
    // let operationsList =
    setOperationList(
      attributeList.filter(
        (item) => attribute === item.attributeName
        //   {
        //   if (attribute === item.attributeName)
        //     {
        //     console.log(item.operations, "bjhui");
        //     return item.operations;
        //   }

        // }
      )
    );
  };

  const handleOperations = (operation) => {
    setOperationName(operation);
  };

  const handleTripleInput = (e) => {
    console.log(query);
    if (e.key === "Enter" && query) {
      setQueryTag([...queryTag, query]);
      // setQuery("")
    }
  };
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className=' bg-slate-900 p-3'
    >
      <Navbar
        query={query}
        setQuery={setQuery}
        attributeList={attributeList}
        handleAttributeList={handleAttributeList}
        attributeName={attributeName}
        setAttributeList={setAttributeList}
        setOperationList={setOperationList}
        operationList={operationList}
        handleOperations={handleOperations}
        operationName={operationName}
        handleTripleInput={handleTripleInput}
        queryTag={queryTag}
      />
      {/* {showChip} */}
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { data } from "../data";

const Navbar = ({
  query,
  setQuery,
  attributeList,
  handleAttributeList,
  handleOperations,
  attributeName,
  setAttributeList,
  operationList,
  setOperationList,
  operationName,
  handleTripleInput,
  queryTag,
}) => {
  const placeholder =
    "Search Filter : select options from suggested values - press ENTER after selection options";
  const [showList, setShowList] = useState(false);

  //   const attributeListHolder = [...attributeList];
  console.log(
    operationList,
    "nav",
    operationList.operations,
    operationList.attributeName
  );
  const getInput = function (input) {
    console.log(input);
    if (input) {
      //   setAttributeList(
      const temp = attributeList.filter((item) =>
        item.attributeName.includes(input)
      );
      console.log(temp);
      setAttributeList(temp);
      //   );
    } else {
      setAttributeList(data);
    }
    console.log(attributeList);
  };
  const debounce = function (func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const handleDebounceSearch = debounce(getInput, 1000);

  return (
    <>
      <div>
        {queryTag?.map((item, index) => {
          return (
            <button key={index} className='text-white'>
              {item}
            </button>
          );
        })}
        <input
          className=' w-[100%] border-2 border-slate-700 bg-slate-900 p-3 mt-3 mb-3 font-[1.2em] text-slate-400'
          placeholder={placeholder}
          type='text'
          value={query || operationName || attributeName}
          onChange={(e) => {
            setQuery(e.target.value);
            handleDebounceSearch(e.target.value);
          }}
          onKeyDown={(e) => handleTripleInput(e)}
          onFocus={() => setShowList((open) => !open)}
        />
      </div>
      {showList && operationList.length === 0 ? (
        <div className='w-[100%] border-2 border-slate-700 bg-slate-900 pr-2 pl-2 text-slate-400 flex flex-col gap-2'>
          {attributeList?.map((item) => {
            return (
              <button
                key={item.id}
                className='p-2 cursor-pointer hover:bg-slate-700 hover:rounded-md border-none text-left'
                onClick={() => handleAttributeList(item.attributeName)}
              >
                {item.attributeName}
              </button>
            );
          })}
        </div>
      ) : (
        operationList.length !== 0 && (
          <div className='w-[100%] border-2 border-slate-700 bg-slate-900 pr-2 pl-2 text-slate-400 flex flex-col gap-2'>
            {operationList[0]?.operations?.map((item) => {
              console.log(item);
              return (
                <button
                  key={item}
                  className='p-2 cursor-pointer hover:bg-slate-700 hover:rounded-md border-none text-left'
                  onClick={() => handleOperations(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )
      )}
    </>
  );
};

export default Navbar;

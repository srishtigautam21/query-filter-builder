import React from "react";

const Navbar = ({ query, setQuery, attributeList }) => {
  const placeholder =
    "Search Filter : select options from suggested values - press ENTER after selection options";
  return (
    <input
      className=' w-[100%] border-2 border-slate-500 bg-slate-900 p-3 mt-3 mb-3 font-[1.2em] text-slate-400'
      placeholder={placeholder}
      type='text'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Navbar;

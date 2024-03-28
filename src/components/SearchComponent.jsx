import { useState } from "react";

export default function SearchComponent(props) {
  const { type, setQuery} = props;

  const search = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full mb-8 flex items-center justify-center">
      <input type="search" onChange={search} placeholder={`Search for ${type}`} className="w-full max-w-lg mx-auto rounded-md"/>
    </div>
  );
}

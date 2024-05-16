import React, { useEffect, useState } from 'react';
// import useDebounce from './useDebounce';

function useDebounce(value, time) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, time)

        return () => {
            clearTimeout(id);
        }
    }, [value, time])

    return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        />
        <div> {debouncedValue} </div>
    </>
  );
};

export default SearchBar;
import { useState } from "react";

const SearchInput = ({ icon: Icon,value, onChange, placeholder, options }) => {
  const [search, setSearch] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);

    const results = options.filter((option) =>
      option.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSuggestions(results);
  };

  const handleSelectOption= (option) => {
    onChange(option)
    setSearch(option)
    setSuggestions([])
  }

  return (
    <div className="relative border w-full border-gray-300 rounded-lg h-[50px]">
      <Icon
        size={24}
        className="absolute top-1/2 -translate-y-1/2 left-2 text-[#9CA3AF]"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
        className="pl-10 pr-4 w-full placeholder:text-grayish rounded-lg text-sm h-full border-0 outline-0"
      />

      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 w-full max-h-[300px] z-10 top-[50px] border overflow-y-auto scrollbar bg-white shadow rounded-md">
          {suggestions.length > 0 ? (
            suggestions.map((option, i) => {
              return (
                <div
                  key={i}
                  className={`py-3 px-4 ${value === option ? "bg-primary text-white" : "hover:bg-gray-200"}  cursor-pointer`}
                  onClick={() => handleSelectOption(option)}
                >
                  <span className="text-sm">{option}</span>
                </div>
              );
            })
          ) : (
            <p className="py-3 px-4 text-center text-gray-500 font-medium">
              No Result Found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

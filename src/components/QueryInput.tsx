import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, querySuccess } from "../redux/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const generateMockData = (query: string) => {
    if (query.toLowerCase().includes("sales")) {
      return [
        { name: "Jan", value: 500 },
        { name: "Feb", value: 700 },
        { name: "Mar", value: 800 },
      ];
    } else if (query.toLowerCase().includes("users")) {
      return [
        { name: "New Users", value: 150 },
        { name: "Returning Users", value: 300 },
      ];
    } else if (query.toLowerCase().includes("revenue")) {
      return [
        { name: "2023", value: 10000 },
        { name: "2024", value: 15000 },
      ];
    } else {
      return [{ name: "Unknown Data", value: Math.floor(Math.random() * 1000) }];
    }
  };

  const handleSubmit = () => {
    if (query.trim() === "") return;
    dispatch(submitQuery(query));

    setTimeout(() => {
      const resultData = generateMockData(query);
      dispatch(querySuccess(resultData));
    }, 2000);

    setQuery("");
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Ask a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        🔎 Submit Query
      </button>
    </div>
  );
};

export default QueryInput;

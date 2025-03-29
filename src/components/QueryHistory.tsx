import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const QueryHistory = () => {
  const history = useSelector((state: RootState) => state.query.history);

  return (
    <div className="p-4 mt-4">
      <h3 className="text-lg font-bold text-gray-700">📜 Query History</h3>
      <ul className="mt-2 space-y-2">
        {history.map((query, index) => (
          <li key={index} className="p-2 bg-gray-200 rounded-md">
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultsDisplay = () => {
  const { resultData, loading, error } = useSelector(
    (state: RootState) => state.query
  );

  if (loading) return <p className="text-center text-blue-600">🔄 Processing...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-700">📊 Query Results</h3>
      {resultData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={resultData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default ResultsDisplay;

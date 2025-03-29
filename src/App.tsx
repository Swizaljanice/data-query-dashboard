import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📊 Data Query Dashboard</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
       
        <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-4">
          <QueryInput />
          <QueryHistory />
        </div>

       
        <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-4">
          <ResultsDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;

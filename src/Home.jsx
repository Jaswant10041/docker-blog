import React, { useContext, useState } from "react";
import ReportForm from "./ReportForm";
import DisplayCards from "./DisplayCards";
import { GlobalState } from "./GloblalContext";

const Home = () => {
  const { data } = useContext(GlobalState);

  const [showForm, setShowForm] = useState(false);
  const [sortOrder, setSortOrder] = useState("Newest");

  const sortData = () => {
    let sortedData = [...data];

    sortedData.sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

    return sortedData;
  };

  return (
    <div>
      {/* Top Controls */}
      <div className="flex flex-wrap gap-4 mb-4 fixed w-full justify-center bg-gray-200 p-5">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {showForm ? "View Blogs" : "Write New Blog"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center bg-gray-100 pt-24 px-4 min-h-screen">
        {showForm ? <ReportForm /> : <DisplayCards data={sortData()} />}
      </div>
    </div>
  );
};

export default Home;

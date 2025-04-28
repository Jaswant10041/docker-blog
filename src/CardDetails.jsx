import React, { useState } from 'react';

const CardDetails = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full sm:w-80 md:w-96 mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
      <p className="text-xs text-gray-400 mb-4">Posted on: {new Date(data.reported_at).toLocaleDateString()}</p>

      {showDetails ? (
        <p className="text-gray-700 text-sm">{data.description}</p>
      ) : (
        <p className="text-gray-700 text-sm">{data.description.slice(0, 100)}...</p>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-blue-500 hover:underline text-sm"
      >
        {showDetails ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default CardDetails;

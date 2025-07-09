import React from "react";

const CaregiverProfile: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Caregiver Name (placeholder)</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Score: 100</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Verified</span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Specialty 1</span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Specialty 2</span>
          </div>
        </div>
      </div>
      {/* Experience Card */}
      <div className="border p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Experience</h2>
        <div className="text-gray-500">Experience details (placeholder)</div>
      </div>
      {/* Certificates Gallery */}
      <div className="border p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Certificates</h2>
        <div className="text-gray-500">Certificate gallery (placeholder)</div>
      </div>
      {/* Past Activities */}
      <div className="border p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Past Activities</h2>
        <div className="text-gray-500">Photos of past activities (placeholder)</div>
      </div>
      {/* Reviews List */}
      <div className="border p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Reviews</h2>
        <div className="text-gray-500">Reviews list (placeholder). Score drops if report count increases.</div>
      </div>
      {/* Edit Availability CTA */}
      <button className="w-full bg-yellow-500 text-white py-2 rounded">Edit Availability</button>
    </div>
  );
};

export default CaregiverProfile; 
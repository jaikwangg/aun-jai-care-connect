import React from "react";

const OnboardingStep2: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Caregiver Verification – Step 2/2</h1>
      <div className="space-y-6">
        {/* Upload Section */}
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Upload Documents</h2>
          <div className="flex flex-col gap-2">
            <input type="file" disabled placeholder="IDCard Front" />
            <input type="file" disabled placeholder="IDCard Back" />
            <input type="file" disabled placeholder="Elder-care Certificate (optional)" />
            <input type="file" disabled placeholder="Police Clearance" />
          </div>
        </div>
        {/* OCR/AI Validation */}
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Auto-OCR & AI Validation</h2>
          <div className="text-gray-500">Validity Score: --/100 (placeholder)</div>
        </div>
        {/* Quiz Section */}
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">Elder-care Quiz</h2>
          <div className="text-gray-500">30-question multiple-choice quiz (placeholder)</div>
        </div>
        {/* FaceID Capture */}
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-2">FaceID Capture</h2>
          <div className="text-gray-500">FaceID capture and comparison (placeholder)</div>
        </div>
        <button type="button" className="w-full bg-green-600 text-white py-2 rounded mt-4">Submit</button>
      </div>
    </div>
  );
};

export default OnboardingStep2; 
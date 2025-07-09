import React from "react";

const OnboardingStep1: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Caregiver Onboarding – Step 1/2</h1>
      <form className="space-y-4">
        {/* Placeholder fields */}
        <input placeholder="Full Name (TH)" className="w-full border p-2 rounded" disabled />
        <input placeholder="Gender" className="w-full border p-2 rounded" disabled />
        <input placeholder="Age" className="w-full border p-2 rounded" disabled />
        <input placeholder="Phone (OTP verify)" className="w-full border p-2 rounded" disabled />
        <input placeholder="Address" className="w-full border p-2 rounded" disabled />
        <input placeholder="Service Areas" className="w-full border p-2 rounded" disabled />
        <input placeholder="Experience Years" className="w-full border p-2 rounded" disabled />
        <input placeholder="Patients Count" className="w-full border p-2 rounded" disabled />
        <input placeholder="Specialties" className="w-full border p-2 rounded" disabled />
        <input placeholder="Available Weekdays" className="w-full border p-2 rounded" disabled />
        <input placeholder="Available Times" className="w-full border p-2 rounded" disabled />
        <button type="button" className="w-full bg-blue-600 text-white py-2 rounded mt-4">Next</button>
      </form>
    </div>
  );
};

export default OnboardingStep1; 
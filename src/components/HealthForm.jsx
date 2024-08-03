// src/components/HealthForm.js
import React, { useState } from 'react';

const HealthForm = ({ onSubmit }) => {
  const [diet, setDiet] = useState('');
  const [allergies, setAllergies] = useState('');
  const [healthGoals, setHealthGoals] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ diet, allergies, healthGoals });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Dietary Preferences:</label>
      <input
        type="text"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        placeholder="e.g., vegetarian, keto, cuisines"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Allergies:</label>
      <input
        type="text"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
        placeholder="e.g., peanuts, gluten"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2">Health Goals:</label>
      <input
        type="text"
        value={healthGoals}
        onChange={(e) => setHealthGoals(e.target.value)}
        placeholder="e.g., weight loss, muscle gain"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
    <button
      type="submit"
      className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
    >
      Submit
    </button>
  </form>
  
  );
};

export default HealthForm;

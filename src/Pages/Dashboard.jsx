// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import HealthForm from '../components/HealthForm';
import { getRecipes } from '../api/gemini';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [healthInfo, setHealthInfo] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);


  const handleHealthFormSubmit = async (data) => {
    setHealthInfo(data);
    setLoading(true);
    // Using the data to query the Gemini API for recipes
    try {
        const fetchedRecipes = await getRecipes(data);
        
        setRecipes(fetchedRecipes);
        console.log(typeof(recipes));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally{
        setLoading(false);
      }
  };

  return (
    <div className=''>
      {user ? (
        <div>
          <h2 className='text-2xl p-6 mb-3 text-center'>Welcome, {user.email}</h2>
          <HealthForm onSubmit={handleHealthFormSubmit} />

          {loading && (
        <div className="flex justify-center items-center py-4 mt-5">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500 border-solid"></div>
          <div className='ml-3'><p>Curating recipes specially for you...</p></div>
        </div>
      )}


          {recipes.length > 0 && (
  <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-10">
    <h3 className="text-2xl font-bold mb-4 text-teal-600">Recommended Recipes:</h3>
    <ol className="list-decimal pl-6 space-y-4">
      {recipes.map((recipe, index) => (
        <li key={index} className="border-b border-gray-300 pb-4">
          <h4 className="text-xl font-semibold text-teal-500">{recipe.recipe_name}</h4>
          <p className="text-gray-700 mt-1">Meal Type: <span className="font-medium">{recipe.meal_type}</span></p>
          <p className="text-gray-700 mt-1">Ingredients: <span className="font-medium">{recipe.ingredients}</span></p>
          <p className="text-gray-700">Preparation Time: <span className="font-medium">{recipe.preparation_time}</span></p>
          <ul className="list-disc pl-5 mt-2">
            {recipe.preparation_steps.split(';').map((step, index) => (
              <li key={index} className="text-gray-800">{step.trim()}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
)}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Dashboard;

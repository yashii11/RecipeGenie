import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } 
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to RecipeGenie</h1>
          <p className="text-lg mb-6">Your ultimate tool for discovering delicious recipes tailored to your dietary needs and preferences.</p>
          <Link
            to="/Dashboard"
            className="inline-block bg-white text-teal-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Recipes</h3>
              <p className="text-gray-700">Enter your dietary preferences and health goals to receive recipes that match your needs perfectly.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Easy-to-Follow Steps</h3>
              <p className="text-gray-700">Our recipes come with detailed preparation steps that are easy to follow, ensuring a successful cooking experience.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Manage Allergies</h3>
              <p className="text-gray-700">Filter recipes to avoid allergens and make sure your meals are safe and enjoyable.</p>
            </div>
          </div>
        </div>
      </section>
      {!user && <section className="bg-teal-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Next Meal?</h2>
          <p className="text-lg mb-6">Join thousands of satisfied users who have discovered their new favorite recipes with RecipeGenie.</p>
          <Link
            to="/login"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </section>}

      {/* Call to Action Section */}
      
    </div>
  )
}

export default Home
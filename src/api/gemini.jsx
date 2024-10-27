// src/api/gemini.js
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
// const GEMINI_API_URL = 'https://api.gemini.com/recipes';


export const getRecipes = async (healthInfo) => {
  try {
    const genAI = new GoogleGenerativeAI(
      REACT_APP_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
  // Set the `responseMimeType` to output JSON
  generationConfig: { responseMimeType: "application/json" } });

        const prompt = `Suggest 10 recipes seperated by $ for a person who follows ${healthInfo.diet} diet and has ${healthInfo.allergies} allergies and his goal is ${healthInfo.healthGoals}
        using the JSON Schema: 
        {
            "type":"object",
            "properties":{
                "meal_type" : {"type" : "string"},
                "recipe_name" : {"type" : "string"},
                "ingredients" : {"type" : "string" },
                "preparation_steps" : {"type" : "string"},
                "preparation_time" : {"type" : "string"},
            }
        }`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const array = text.split("$");
        var res=[];
       array.map((x)=>{
        res.push(JSON.parse(x));
       })

        return res;
    
  } catch (error) {
    console.error('Error fetching recipes from Gemini API', error);
    throw error;
  }
};

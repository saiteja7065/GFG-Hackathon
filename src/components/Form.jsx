import { useState } from 'react';

function Form({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    bodyType: '',
    healthGoals: '',
    dietaryPreferences: '',
    allergens: '',
    workSchedule: '',
    exerciseHabits: '',
    stressLevels: '',
    sleepDuration: '',
    medicalConditions: '',
    cookingSkills: '',
    kitchenEquipment: '',
    mealPreferences: '',
  });
  const [mealPlan, setMealPlan] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateMealPlan = async (e) => {
    e.preventDefault();

    // Simulated dummy meal plan response
    const dummyMealPlan = {
      meals: [
        { id: 1, title: "Grilled Chicken Salad", readyInMinutes: 30, sourceUrl: "#" },
        { id: 2, title: "Vegan Quinoa Bowl", readyInMinutes: 25, sourceUrl: "#" },
        { id: 3, title: "Pasta Primavera", readyInMinutes: 20, sourceUrl: "#" },
      ],
      nutrients: {
        calories: 1500,
        carbohydrates: 180,
        protein: 100,
        fat: 40,
      }
    };

    // Simulate fetching meal plan data
    setMealPlan(dummyMealPlan);
  };

  const formFields = [
    { label: "Age", name: "age", type: "number", required: true },
    { label: "Gender", name: "gender", type: "select", options: ["Select Gender", "Male", "Female", "Other"], required: true },
    { label: "Height (cm)", name: "height", type: "number", required: true },
    { label: "Weight (kg)", name: "weight", type: "number", required: true },
    { label: "Body Type", name: "bodyType", type: "text" },
    { label: "Health Goals", name: "healthGoals", type: "text" },
    { label: "Dietary Preferences", name: "dietaryPreferences", type: "text" },
    { label: "Allergens", name: "allergens", type: "text" },
    { label: "Work Schedule", name: "workSchedule", type: "text" },
    { label: "Exercise Habits", name: "exerciseHabits", type: "text" },
    { label: "Stress Levels", name: "stressLevels", type: "text" },
    { label: "Sleep Duration", name: "sleepDuration", type: "text" },
    { label: "Medical Conditions", name: "medicalConditions", type: "text" },
    { label: "Cooking Skills", name: "cookingSkills", type: "text" },
    { label: "Kitchen Equipment", name: "kitchenEquipment", type: "text" },
    { label: "Meal Preferences", name: "mealPreferences", type: "text" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center text-black z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-[500px] relative">
        <button className="absolute top-2 right-2 text-2xl text-black hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">User Health Information</h2>
        <form onSubmit={currentStep < Math.ceil(formFields.length / 5) - 1 ? (e) => { e.preventDefault(); setCurrentStep(currentStep + 1); } : handleGenerateMealPlan}>
          {formFields.slice(currentStep * 5, (currentStep + 1) * 5).map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block text-gray-700">{field.label}</label>
              {field.type === 'select' ? (
                <select name={field.name} className="w-full px-2 h-10 border rounded-md" onChange={handleInputChange} required={field.required}>
                  {field.options.map((option) => (
                    <option value={option.toLowerCase()} key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input 
                  type={field.type} 
                  name={field.name} 
                  className="w-full px-2 h-10 border rounded-md" 
                  onChange={handleInputChange} 
                  required={field.required} 
                />
              )}
            </div>
          ))}
          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <button 
                type="button" 
                className="bg-gray-500 text-white px-4 h-10 rounded-md transition duration-300 hover:bg-gray-600"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </button>
            )}
            {currentStep < Math.ceil(formFields.length / 5) - 1 ? (
              <button 
                type="button" 
                className="bg-blue-500 text-white px-4 h-10 rounded-md transition duration-300 hover:bg-blue-600"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </button>
            ) : (
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 h-10 rounded-md transition duration-300 hover:bg-blue-600"
              >
                Generate Meal Plan
              </button>
            )}
          </div>
        </form>

        {/* Display meal plan if available after clicking generate */}
        {mealPlan && (
          <div className="mt-4">
            <h3 className="font-bold">Generated Meal Plan:</h3>
            <ul>
              {mealPlan.meals.map((meal) => (
                <li key={meal.id} className="text-gray-700">
                  <a href={meal.sourceUrl} className="text-blue-600 underline">{meal.title}</a> - {meal.readyInMinutes} minutes
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <p><strong>Total Calories:</strong> {mealPlan.nutrients.calories}</p>
              <p><strong>Total Carbohydrates:</strong> {mealPlan.nutrients.carbohydrates}g</p>
              <p><strong>Total Protein:</strong> {mealPlan.nutrients.protein}g</p>
              <p><strong>Total Fat:</strong> {mealPlan.nutrients.fat}g</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;

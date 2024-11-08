// src/pages/Dashboard.jsx
import { useState } from 'react';
import Form from '../components/Form';
import FoodScannerPage from './FoodScannerPage';
import Consultation from './Consultation';
import WorkoutSessions from './Workout';
import ProgressChart from './ProgressChart'; // Import ProgressChart component

function Dashboard() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isConsultationOpen, setConsultationOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  const handleOpenConsultation = () => setConsultationOpen(true);
  const handleCloseConsultation = () => setConsultationOpen(false);

  // Sample data for ProgressChart
  const chartData = {
    progressLabels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    progressValues: [3, 5, 2, 6], // Example workout count per week
    calorieLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    calorieValues: [2000, 2100, 1800, 2200, 1900, 2300, 2100], // Daily calories
    macroValues: [30, 50, 20], // Protein, Carbs, Fats in percentage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white transition duration-500">
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Welcome to Dietify Dashboard!
      </h1>
      <p className="mb-8 text-lg max-w-md text-center">
        Fill out the form to receive personalized food suggestions tailored to your busy lifestyle.
      </p>
      
      <button 
        onClick={handleOpenForm} 
        className="mb-8 bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg transition duration-300 hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1"
      >
        Open Form
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl p-4">
        {/* Food Scanner Card */}
        <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-2">Food Scanner</h2>
          <FoodScannerPage /> {/* Render FoodScannerPage component */}
          <p className="text-sm">Quickly log food items and view detailed nutritional information.</p>
        </div>
        
        {/* Consultation Features Card */}
        <div className="bg-white text-green-600 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-2">Consultation Features</h2>
          <button
            onClick={handleOpenConsultation}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600"
          >
            Request Consultation
          </button>
          <p className="text-sm">Consult with nutritionists or dietitians via chat or scheduled calls.</p>
        </div>

        {/* Workout Sessions Card */}
        <div className="bg-white text-yellow-600 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-2">Workout Sessions</h2>
          <WorkoutSessions /> {/* Render WorkoutSessions component */}
          <p className="text-sm">Watch animated videos demonstrating various exercises.</p>
        </div>

        {/* Progress Reports Card */}
        <div className="bg-white text-purple-600 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:shadow-2xl hover:scale-105 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-2">Progress Reports</h2>
          <ProgressChart data={chartData} /> {/* Render ProgressChart component */}
          <p className="text-sm">Track your weight, calorie intake, and progress toward your goals.</p>
        </div>
      </div>

      {/* Conditional rendering for Form and Consultation components */}
      {isFormOpen && <Form onClose={handleCloseForm} />}
      {isConsultationOpen && <Consultation onClose={handleCloseConsultation} />}
    </div>
  );
}

export default Dashboard;

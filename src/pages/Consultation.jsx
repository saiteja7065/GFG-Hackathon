import React, { useState } from 'react';

function Consultation({ onClose }) {  // Accept onClose as a prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you could add code to send this data to an API
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black relative w-full max-w-md">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-black text-xl"
        >
          &times;  {/* This is the "X" character */}
        </button>
        <h2 className="text-2xl font-bold mb-4">Consultation Request</h2>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold">Thank you for your request!</h3>
            <p>We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Consultation Type</label>
              <select
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                required
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select...</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Fitness">Fitness</option>
                <option value="Diet Plan">Diet Plan</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Consultation;

"use client";

import React, { useState } from "react";

const Page = () => {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPin = "1234"; // Change this to your desired PIN

  const handleSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect PIN. Try again!");
      setPin(""); // Clear input on incorrect attempt
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* PIN LOCK POPUP */}
      {!isAuthenticated && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Enter PIN to Access</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="p-2 border rounded-md w-full text-center"
              placeholder="Enter PIN"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Unlock
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

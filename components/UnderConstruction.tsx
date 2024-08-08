import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full xl:w-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          I am working hard to bring you a great experience. Please wait patientlyn!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;

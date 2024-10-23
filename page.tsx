import React from 'react';

const HomePage = () => {
  return (
    <div className="p-8">

      <div className="flex items-center justify-between">
        
        
        <div className="text-left">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Sheeraz Ahmed Jogi</h1>
          <p className="text-xl text-gray-700 mb-2">
            I have recently <span className="font-semibold text-red-500">completed my intermediate education</span>
          </p>
          <p className="text-xl text-gray-700 mb-2">
            Currently pursuing advanced courses in <span className="font-semibold text-green-500">Artificial Intelligence</span>,
          </p>
          <p className="text-xl text-gray-700 mb-2">
            <span className="font-semibold text-green-500">Web Development</span>, and <span className="font-semibold text-green-500">Cloud Computing</span>.
          </p>
          <p className="text-xl text-gray-700 mb-2">
            Passionate about applying modern technologies to solve real-world problems.
          </p>
        </div>
        
        
        <img 
          src="profile.jpg" 
          alt="loading" 
          className="rounded-full w-48 h-48 ml-8 shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomePage;
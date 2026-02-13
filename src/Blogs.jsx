import React, { useState, useEffect } from 'react';

const Blogs = ({ img, ll }) => {
  const [len, setLen] = useState("");

  useEffect(() => {
    setLen(ll);
  }, [ll]);

  const shortLen = len.split(" ").splice(0, 10).join(' ');

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group h-full">
      <div className="h-48 overflow-hidden">
        <img 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          src={img} 
          alt="Blog thumbnail" 
        />
      </div> 
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-gray-300 text-lg mb-4 flex-grow">
          {shortLen}...
        </h3>
        <span className="inline-block text-purple-400 font-semibold cursor-pointer hover:text-purple-300 transition-colors">
          Read More →
        </span>
      </div>
    </div>
  );
};

export default Blogs;
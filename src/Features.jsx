import React from 'react';

const Features = ({ para, logo }) => {
  return (
    <div className="flex flex-col items-center p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group shadow-xl hover:shadow-purple-500/10">
      <div className="mb-6 p-4 rounded-full bg-slate-700/50 group-hover:bg-purple-900/30 transition-colors duration-300">
        {logo}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{para}</h3>
      <p className="text-gray-400 text-center text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus assumenda exercitationem.
      </p>
    </div>
  );
};

export default Features;
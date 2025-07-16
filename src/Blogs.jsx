import React, { useState, useEffect } from 'react';

const Blogs = ({img,ll}) => {
  let [len, setLen] = useState("");

  

  useEffect(() => {
    setLen(ll);

  }, [len]);

  const shortLen=len.split(" ").splice(0,10).join(' ')

  return (
    <div className='w-[300px] rounded border p-[10px]'>
      <div>
        <img className='rounded mb-[10px]' src={img} alt="" />
      </div> 
      <h1 className=' text-center'>{shortLen}<span className='text-blue-400 cursor-pointer'>{"....Read More"}</span></h1>
    </div>
  );
};

export default Blogs;
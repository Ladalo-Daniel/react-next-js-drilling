"use client"


import React, { useEffect } from 'react';

const AdminPage = () => {
  return (
       <div className=" max-md max-md:pt-14 text-white bg-blue-600 max-sm:pt-5 p-9 m-9 " >
          <h1 className=' text-yellow-700'>Hello Dashboard!</h1>
          {Array.from({ length: 50 }, (_, index) => (
              <h1 key={index}>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
           ))} 
        </div>
  );
};

export default AdminPage;

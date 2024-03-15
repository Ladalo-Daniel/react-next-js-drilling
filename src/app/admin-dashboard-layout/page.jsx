"use client"

import React from 'react';

const AdminPage = () => {


  return (
    <main className="flex blueGreen flex-col md:flex-row min-h-screen overflow-hidden max-w-7xl mx-auto">
      <aside className="md:w-[18rem] bg-white shadow-lg relative md:h-screen max-lg:hidden h-auto w-full flex flex-row md:flex-col md:justify-normal gap-8 md:gap-4">
          <div className="w-[10rem] bg-red-600 max-lg:hidden h-[100px] md:shadow-xl text-center md:w-[85%] md:h-[25%] border-0 flex gap-1 md:gap-2 flex-row md:flex-col justify-start md:justify-center md:mt-1 md:ml-2 items-center rounded-xl"
          >
            <h1>Image</h1>
          </div>
          <div className=' text-black'>
            <h1>Sidebar</h1>
          </div>
      </aside>
      <main className="relative h-screen flex flex-col flex-1 w-full overflow-y-auto bg-[#9f3a3a] ">
        <header className="h-auto bg-yellow-400 py-5 sticky max-md:fixed top-0 w-full flex justify-between z-30">
          <h1>LOGO</h1>
          <h2>Name</h2>
        </header>
        <div className=" max-md max-md:pt-14 text-white bg-blue-400 max-sm:pt-5 " >
          {Array.from({ length: 50 }, (_, index) => (
                <h1 key={index}>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
          ))} 
        </div>
      </main>
    </main>
  );
};

export default AdminPage;

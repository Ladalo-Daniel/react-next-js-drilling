import React from 'react'

const SideMenu = () => {
  return (
    <aside className="md:w-[18rem] bg-black relative md:h-screen max-lg:hidden h-auto w-full flex flex-row md:flex-col md:justify-normal gap-8 md:gap-4">
    <div className="w-[10rem] bg-red-600 max-lg:hidden h-[100px] md:shadow-xl text-center md:w-[85%] md:h-[25%] border-0 flex gap-1 md:gap-2 flex-row md:flex-col justify-start md:justify-center md:mt-1 md:ml-2 items-center rounded-xl"
    >
      <h1>Image</h1>
    </div>
    <div className=' text-white'>
      <h1>Sidebar</h1>
    </div>
   </aside>
  )
}

export default SideMenu
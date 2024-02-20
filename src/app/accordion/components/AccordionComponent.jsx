"use client"

import { ArrowDown } from 'lucide-react'
import React, { useState } from 'react'

function AccordionComponent({ sections }) {
    const [activeSection, setActiveSection] = useState(null)

    const toggleActiveSection = (idx) => {
        setActiveSection(idx === activeSection ? null : idx)
    }

  return (
    <div  className=' p-2 rounded-lg bg-white min-h-[400px] w-[90vw] md:w-[400px] flex flex-col gap-4'>
        <h1 className=' text-center text-2xl text-yellow-900'>My Accordion</h1>
        <div>
            {sections.map((section, idx) => (
                <div key={idx} className=' flex gap-2 flex-col overflow-hidden'>
                    <div 
                    onClick={() => toggleActiveSection(idx)}
                    className={` bg-slate-100 p-2 transition-all duration-1000 ease-linear cursor-pointer flex flex-row justify-between items-center`}
                    >
                        {section.title}
                        <ArrowDown size={16} className=' text-yellow-900'/>
                    </div>
                    <div 
                    className={` max-h-0 overflow-hidden transition-all duration-1000 ${idx === activeSection ? " max-h-[1000px] transition-all duration-1000  " : ""}`}
                    >
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AccordionComponent
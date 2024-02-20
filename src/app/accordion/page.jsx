import React from 'react'
import AccordionComponent from './components/AccordionComponent'

const AccordionPage = () => {

  const sections = [
    { title: 'Section 1', content: 'This sentence consists of a subject The sun and a predicate sets in the west. It conveys a straightforward piece of information about the ' },
    { title: 'Section 2', content: 'In this sentence, She is the subject, and likes to read books is the predicate. The sentence communicates a simple fact about' },
    { title: 'Section 3', content: 'The subject of this sentence is My dog and the predicate is barks loudly. It provides information about the behavior of the' },
  ];

  return (
    <div className=' bg-slate-100 min-h-[100vh] flex items-center justify-center md:py-9'>
       <AccordionComponent sections={sections} />
    </div>
  )
}

export default AccordionPage
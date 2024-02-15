// Form.js
import React from 'react';
import FormComponent from './FormComponent';

function Form() {
  return (
    <div className='flex flex-col gap-2 bg-white rounded-lg shadow-md w-[90vw] md:w-[400px] p-4'>
      <div className=' flex items-center justify-center rounded-full h-[40px] w-[40px] bg-yellow-500 self-center'>
        <p className=' text-center text-white'>R</p>
      </div>
      <FormComponent />
    </div>
  );
}

export default Form;

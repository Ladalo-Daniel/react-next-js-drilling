// Form.js
import React from 'react';
import FormComponent from './FormComponent';

function Form() {
  return (
    <div className='flex flex-col gap-2 bg-white rounded-lg shadow-md w-[90vw] md:w-[500px] p-4'>
      <h1 className='text-center text-orange-600 text-2xl underline'>REGISTER FORM</h1>
      <FormComponent />
    </div>
  );
}

export default Form;

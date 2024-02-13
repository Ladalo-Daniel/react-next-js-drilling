"use client"

import React, { useState } from 'react';
import { submitFormData } from '../apiHandler';
import { validateForm } from '../formValidation';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false)
    if(validateForm(formData, setErrors)){
    alert(JSON.stringify(`Hello ${formData.username} Confirm if the following data is correct: ${JSON.stringify(formData)}`))
        setSuccessMessage('Registration successful!');
        setIsLoading(true)
    }

    // if (validateForm(formData, setErrors)) {
    //     console.log(formData)
    //   try {
    //     const response = await submitFormData(formData);

    //     if (response.ok) {
    //       const data = await response.json();
    //       setSuccessMessage('Registration successful!');
    //       setIsLoading(false)
    //       console.log('API Response:', data);
    //     } else {
    //       const errorData = await response.json();
    //       setIsLoading(false)
    //       console.error('API Error:', errorData);
    //     }
    //   } catch (error) {
    //     console.error('Fetch Error:', error);
    //   }
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-9 py-2'>
        <label htmlFor='username' className='flex flex-col gap-2'>
          <span className='text-yellow-800 text-2xl'>Username</span>
          <input
            type='text'
            className='shadow-md ring-1 ring-yellow-100 outline-none rounded-md p-3'
            placeholder='Username here ...'
            name='username'
            id='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className='text-red-500'>{errors.username}</p>}
        </label>
        <label htmlFor='email' className='flex flex-col gap-2'>
          <span className='text-yellow-800 text-2xl'>Email</span>
          <input
            type='email'
            placeholder='Email here ...'
            className='shadow-md rounded-md p-3 ring-1 ring-yellow-100 outline-none'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </label>
        <label htmlFor='password' className='flex flex-col gap-2'>
          <span className='text-yellow-800 text-2xl'>Password</span>
          <input
            type='password'
            placeholder='Password here ...'
            className='shadow-md rounded-md p-3 ring-1 ring-yellow-100 outline-none'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className='text-red-500'>{errors.password}</p>}
        </label>
        <button type='submit' className='bg-yellow-500 text-white rounded-md p-2 w-1/2 self-center' disabled={loading}>
          {loading ? "Congrats!" : 'Register'}
        </button>
        {successMessage && <p className='text-green-500 text-center ring-1 p-2 ring-green-300'>{successMessage}</p>}
      </form>
    </>
  );
}

export default FormComponent;

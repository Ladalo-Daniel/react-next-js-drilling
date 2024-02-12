"use client"

import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (formData.username.length < 4) {
      newErrors.username = 'Username must be more than 4 characters';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://your-api-endpoint.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setSuccessMessage('Registration successful!');
          console.log('API Response:', data);
        } else {
          const errorData = await response.json();
          console.error('API Error:', errorData);
        }
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col gap-2 bg-white rounded-md shadow-md w-[500px] h-[600px] p-4'>
      <h1 className='text-center text-orange-600 underline'>REGISTER FORM</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-9'>
        <label htmlFor='username' className='flex flex-col gap-2'>
          <span className='text-yellow-800 text-2xl'>Username</span>
          <input
            type='text'
            className='shadow-md rounded-md p-3'
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
            className='shadow-md rounded-md p-3'
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
            className='shadow-md rounded-md p-3'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className='text-red-500'>{errors.password}</p>}
        </label>
        <button type='submit' className='bg-orange-500 text-white rounded-md p-2 w-1/2 self-center'>
          Register
        </button>
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
      </form>
    </div>
  );
}

export default Form;

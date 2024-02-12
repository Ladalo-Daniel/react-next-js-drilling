// formValidation.js
export const validateForm = (formData, setErrors) => {
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
  
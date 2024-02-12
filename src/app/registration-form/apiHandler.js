// apiHandler.js
export const submitFormData = async (formData) => {
    const apiUrl = 'https://dallo-blog-update-com.onrender.com/register';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      return response;
    } catch (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
  };
  
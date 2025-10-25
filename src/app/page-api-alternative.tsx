// Alternative implementation using API route instead of EmailJS
// To use this, replace the handleSubmit function in page.tsx with this version

const handleSubmitAPI = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Send to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    setIsSubmitting(false);
    setSubmitStatus('error');
    
    // Reset error status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  }
};

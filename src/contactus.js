import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>

      <div style={styles.infoSection}>
        <p style={styles.infoText}><strong>Cookie Cravings</strong></p>
        <p style={styles.infoText}>123 Sweet Street, Cookie Town</p>
        <p style={styles.infoText}>Email: info@cookiecravings.com</p>
        <p style={styles.infoText}>Phone: +1 555-123-4567</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '140px auto',
    padding: '20px ',
    
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff8f0',
    border: '1px solid #ffe0b2',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#d2691e',
  },
  infoSection: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  infoText: {
    margin: '5px 0',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    height: '100px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    backgroundColor: '#ffa726',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactUs;

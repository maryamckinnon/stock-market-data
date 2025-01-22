import { useState } from 'react';

export default function Practice() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    setValues({
      ...values,
      [name] : value
    });
  }


  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>
          First Name:
          <input
            type='text'
            name='firstName'
            placeholder='Enter first name'
            value={values.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            type='text'
            name='lastName'
            placeholder='Enter last name'
            value={values.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='agree'>
          Agree:
          <input
            type='checkbox'
            name='agree'
            value={values.agree}
            onChange={handleChange}
            required
          />
        </label>
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

import { useState } from 'react';

export default function Practice() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues({
      ...values,
      [name] : value,
    });
  }

  async function fetchData() {
    const url = 'fake-url.com';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {

        }
      })
    } catch (error) {
      console.error(error);
    } finally {
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreed: false,
      });
      setIsSubmitting(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    fetchData();
  }

  return (
    <>
      {isSubmitting && <h1>Submitting...</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>
          First Name: 
          <input
            type='text'
            name='firstName'
            placeholder='Enter your first name'
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
            placeholder='Enter your last name'
            value={values.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='text'
            name='email'
            placeholder='Enter your email address'
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            placeholder='Enter a password'
            value={values.password}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='agreed'>
          Agreed
          <input
            type='checkbox'
            name='agreed'
            value={values.agreed}
            onChange={handleChange}
            required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

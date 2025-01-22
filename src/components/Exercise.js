import { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseData from './ExerciseData';

export default function Exercise() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  async function fetchData() {
    const baseUrl = 'https://trackapi.nutritionix.com/v2/natural/exercise';
    const APP_ID = process.env.EXERCISE_APP_ID;
    const APP_KEY = process.env.EXERCISE_APP_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': `${APP_ID}`,
      'x-app-key': `${APP_KEY}`,
    }

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      setData(result.exercises);
      setFormData({});
    } catch (error) {
      console.error(error);
    }
  };

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.query) {
      fetchData();
    }
  }

  return (
    <>
      <ExerciseForm
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
      />
      <ExerciseData data={data} />
    </>
  );
}
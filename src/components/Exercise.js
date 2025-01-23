import { useState } from 'react';
import ExerciseData from './ExerciseData';
import ExerciseForm from './ExerciseForm';

export default function Exercise() {
  const [formData, setFormData] = useState({
    query: '',
    age: ''
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }

  async function fetchData() {
    const baseUrl = 'https://trackapi.nutritionix.com/v2/natural/exercise';
    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'x-app-id': `${APP_ID}`,
      'x-app-key': `${APP_KEY}`,
    }
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result.exercises)
      setFetchedData(result.exercises);
      setError(null);
    } catch (error) {
      setError('Failed to fetch data. Please try again.')
      console.error(error.message);
    } finally {
      setFormData({
        query: '',
        age: ''
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <>
      <ExerciseForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      {fetchedData?.length > 0 &&
        <ExerciseData fetchedData={fetchedData} error={error}/>
      }
    </>
  )
}


































// import { useState } from 'react';
// import ExerciseForm from './ExerciseForm';
// import ExerciseData from './ExerciseData';
// // practice showing loading state when form is submitted and waiting to get data back
// export default function Exercise() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   async function fetchData() {
//     const baseUrl = 'https://trackapi.nutritionix.com/v2/natural/exercise';
//     const APP_ID = '76c5110f';
//     const APP_KEY = 'f4c7c9889010851d13fa3056c61c1e54';
//     const headers = {
//       'Content-Type': 'application/json',
//       'x-app-id': `${APP_ID}`,
//       'x-app-key': `${APP_KEY}`,
//     }
//     setIsLoading(true);

//     try {
//       const response = await fetch(baseUrl, {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       console.log(result);
//       setData(result.exercises);
//       setFormData({});
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   function handleFormChange(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     if (formData.query) {
//       fetchData();
//     }
//   }

//   return (
//     <>
//       <ExerciseForm
//         handleFormChange={handleFormChange}
//         handleFormSubmit={handleFormSubmit}
//         formData={formData}
//       />
//       {isLoading ? (
//         <h2>Loading...</h2>
//       ): <ExerciseData data={data} />}
//     </>
//   );
// }
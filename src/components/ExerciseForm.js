export default function ExerciseForm({ handleSubmit, handleChange, formData }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='query'>
          Exercise (i.e. walked for 1 mile)
          <input 
            type='text'
            name='query'
            value={formData.query}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='age'>
          Age
          <input
            type='number'
            name='age'
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
// export default function ExerciseForm({ formData, handleFormChange, handleFormSubmit}) {
//   return (
//     <>
//     <h2>Look up how many calories were burned during an exercise session</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor='query'>
//           Exercise description (i.e. "Walked for 1 mile")
//             <input
//               type='text'
//               name='query'
//               value={formData.query || ''}
//               onChange={handleFormChange}
//               required
//             />
//           </label>
//         <label htmlFor='age'>
//           Age (Optional)
//           <input
//             type='number'
//             name='age'
//             value={formData.age || ''}
//             onChange={handleFormChange}
//           />
//         </label>
//         <button type='submit'>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }
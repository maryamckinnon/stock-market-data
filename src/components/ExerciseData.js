export default function ExerciseData({ fetchedData, error}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Exercise: </th>
            <th>Duration: </th>
            <th>Calories burned: </th>
            <th>MET: </th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((exercise) => (
            <tr key={exercise.tag_id}>
              <td>{exercise.name}</td>
              <td>{exercise.duration_min}</td>
              <td>{exercise.nf_calories}</td>
              <td>{exercise.met}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total calories burned: {fetchedData.reduce((total, exercise) => total + exercise.nf_calories, 0)}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

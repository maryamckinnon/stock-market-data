export default function ExerciseData({ data }) {
  return (
    <>
      <ul>
        {data?.map((item) => (
          <div key={item.tag_id}>
            <p>Exercise: {item.name}</p>
            <ul>Duration: {item.duration_min} minutes</ul>
            <ul>MET: {item.met}</ul>
            <ul>Calories burned: {item.nf_calories} calories</ul>
          </div>
        ))}
      </ul>
    </>
  );
}
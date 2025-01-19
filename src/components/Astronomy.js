import { useState, useEffect } from 'react';

export default function Astronomy() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  const today = new Date();
  const ISODateTime = today.toISOString();
  const ISODate = ISODateTime.slice(0,10);

  const fetchData = async () => {
    const API_KEY = process.env.NASA_API_KEY;
    const baseUrl = 'https://api.nasa.gov/planetary/apod';

    try {
      const response = await fetch(`${baseUrl}?api_key=${API_KEY}`);
      const imageData = await response.json();
      localStorage.setItem(`NASA_${ISODate}`, JSON.stringify(imageData));
      setData(imageData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`NASA_${ISODate}`);
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      fetchData();
    }
  }, []);

  return (
    <>
      <h1>NASA's Astronomy Picture of the Day</h1>
      <h2>{data?.title}</h2>
        <div className='nasa-media'>
          {data?.media_type === 'image' ? (
            <img src={data?.url} alt={data.title} style={{width: '500px'}}/>
          ) : (
            <iframe
              src={data?.url}
              title={data?.title}
              allow='autoplay'
              allowFullScreen
              style={{width: '100%', height: '500px'}}
            />
          )}
          <button className='description-button' onClick={() => setShow(!show)}>
            <b>{show ? 'Hide description' : 'Show description'}</b>
          </button>
          {show && <p className='description'>{data.explanation}</p>}
        </div>
    </>
  );
}

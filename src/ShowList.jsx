import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css'; 

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h2>Show List</h2>
    <div className="show-list-container">
    
      
      {shows.map((show) => (
        <div key={show.show.id} className="card">
        <div className='img'>
          {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
          </div>
          <div className="card__content">
            <h3 className="card__title">{show.show.name}</h3>
            <p className="card__description">{show.show.summary}</p>
            <Link to={`/show/${show.show.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ShowList;
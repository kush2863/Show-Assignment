
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from './BookingForm';
import './ShowDetail.css'; 

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };
   

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    sessionStorage.setItem('userDetails', JSON.stringify(formData));
    setBookingFormVisible(false);
  };

  return (
    <div className="show-details-container"> 
      <h1>Show Details</h1>
      {show && (
        <div>
          <h2 className='showName'>{show.name}</h2>
          {show.image && <img src={show.image.medium} alt={show.name} />}
          <p>{show.summary}</p>

          

          <h3>Genres</h3>
          <ul>
            {show.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          

          
          
            <div className='button'>
          <button onClick={handleBookTicket}>Book Movie Ticket</button>
                </div>
          {bookingFormVisible && (
            <BookingForm movieName={show.name} onSubmit={handleFormSubmit}  onClose ={()=> setBookingFormVisible(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;

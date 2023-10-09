// Details.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('jwtToken');
  const projectId = '24ivifnsynsd';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show/${movieId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectId': projectId,
          },
        });

        setMovieDetails(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch Movie Details Error', error);
      }
    };

    fetchMovieDetails();
  }, [movieId, token, projectId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Title: {movieDetails.title}</p>
      <p>Description: {movieDetails.description}</p>
    </div>
  );
};

export default Details;

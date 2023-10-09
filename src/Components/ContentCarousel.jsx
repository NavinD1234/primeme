import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import { responsive3 } from './Caroseldata';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ContentCarousel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('jwtToken');
  const projectId = '24ivifnsynsd';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/show', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectId': projectId,
          },
        });

        setData(response.data.data);
        setIsLoading(false);

        console.log('Fetched Data:', response.data);
      } catch (error) {
        console.error('Fetch Data Error', error);
      }
    };

    fetchData();
  }, [token, projectId]);

  return (
    <div className='container'>
      <h1>Index Page</h1>
      {/* Display your data here */}
      <div className="row">
        <Carousel responsive={responsive3}>
          {data.map((movie) => (
            <Link
            key={movie._id}
            to={`/details/${movie._id}`} // Ensure movie._id is correct
            className="movie-card"
          >
              <div className="card mr-2" style={{ width: "22rem", height: "38rem" }}>
                <img className="card-img-top" src={movie.thumbnail} alt="Card image cap" style={{ height: "250px" }} />
                <div className="card-body">
                  <h5 className="card-title" id='btnmain'><b>{movie.title} </b></h5>
                  <p className='text-title'>{movie.description} </p>
                  {/* Remove this Link as it's not needed */}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContentCarousel;

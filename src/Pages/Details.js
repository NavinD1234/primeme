import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';











import Carousel from 'react-multi-carousel';
import { responsive3 } from './Caroseldata';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HeaderComp from '../Components/HeaderComp';
import HomeCarousel from '../Components/HomeCarousel';
import FooterComp from "../Components/FooterComp";
const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  // const token = localStorage.getItem('jwtToken');
  // const projectId = '24ivifnsynsd';





  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
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
        const last5Data = response.data.data.slice(-15);

        setData2(last5Data);


        const last5Data3 = response.data.data.slice(-8);

        setData3(last5Data3);
        //setIsLoading(false);
    
        setData(response.data.data);
        setIsLoading(false);

        console.log('Fetched Data:', response.data);
      } catch (error) {
        console.error('Fetch Data Error', error);
      }
    };

    fetchData();
  }, [token, projectId]);


  




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

        setMovieDetails(response.data.data); // Use response.data.data to access movie details
        setIsLoading(false);

        console.log('Fetched Movie Details:', response.data);
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
     <HeaderComp />
    {/* <HomeCarousel /> */}

<div class="container-fluid">


<div className='mt-5'>
  <video
    controls 
    width="100%" 
    height="400px"
    autoPlay 
    poster={movieDetails.thumbnail} // Set the poster image URL
  >
    <source src={movieDetails.video_url} type="video/mp4" />
  </video>
</div>


</div>

<div class="container">
  <h1>Movie Name - {movieDetails.title}</h1>
  <h4>Description - {movieDetails.description}</h4>
  <h4>Cast - {movieDetails.cast}</h4>
  <h4>Director - {movieDetails.director}</h4>
  <div>
    <h4>Keywords:</h4>
    <ul>
      {Array.isArray(movieDetails.keywords) ? (
        movieDetails.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))
      ) : (
        <p>No keywords available</p>
      )}
    </ul>
  </div>
</div>



     
      <h2 className='text-center my-3'>Related Movies
      </h2>
       



      <div className="row container col-md-12">
        <Carousel responsive={responsive3}>
          {data.map((movie) => (
            <Link
            key={movie._id}
            to={`/details/${movie._id}`} // Ensure movie._id is correct
            className="movie-card"
          >
              
  <div class="card-body">
  <img className="card-img-top" src={movie.thumbnail} alt="Card image cap" style={{ height: "125px",borderRadius:"20px" }} />

</div>
            </Link>
          ))}
        </Carousel>
      
       



       
      </div>


    </div>



  );
};

export default Details;

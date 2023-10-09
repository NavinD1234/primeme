  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import { responsive3 } from './Caroseldata';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HeaderComp from '../Components/HeaderComp';
import HomeCarousel from '../Components/HomeCarousel';
import FooterComp from "../Components/FooterComp";

     
const Index = () => {

  const [data, setData] = useState(null);
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
   
    <div>
    <HeaderComp />
    <HomeCarousel />
      <h1>Most-popular movies
</h1>
    
    
    
    
    
    
    
      {/* Display your data here */}
      <div className="row container col-md-12">
      <Carousel responsive={responsive3}>
  {data && data.length > 0 ? (
    data.map((movie) => (
      <Link
        key={movie._id}
        to={`/details/${movie._id}`}
        className="movie-card"
      >
        <div className="card-body">
          <img
            className="card-img-top"
            src={movie.thumbnail}
            alt="Card image cap"
            style={{ height: "125px", borderRadius: "20px" }}
          />
        </div>
      </Link>
    ))
  ) : (
    <p>No movie data available</p>
  )}
</Carousel>

        <h1>New-Arrival movies
</h1>
<Carousel responsive={responsive3}>
  {data2 && data2.length > 0 ? (
    data2.map((movie) => (
      <Link
        key={movie._id}
        to={`/details/${movie._id}`}
        className="movie-card"
      >
        <div className="card-body">
          <img
            className="card-img-top"
            src={movie.thumbnail}
            alt="Card image cap"
            style={{ height: "125px", borderRadius: "20px" }}
          />
        </div>
      </Link>
    ))
  ) : (
    <p>No movie data available</p>
  )}
</Carousel>



        <h1>Watch New Web Series
</h1>
<Carousel responsive={responsive3}>
{data && Array.isArray(data) && data.length > 0 ? (
  data.map((movie) => (
    <Link
      key={movie._id}
      to={`/details/${movie._id}`}
      className="movie-card"
    >
      <div className="card-body">
        <img
          className="card-img-top"
          src={movie.thumbnail}
          alt="Card image cap"
          style={{ height: "125px", borderRadius: "20px" }}
        />
      </div>
    </Link>
  ))
) : (
  <p>No movie data available</p>
)}

</Carousel>



       
      </div>








      
      <FooterComp />
    </div>
  );
};

export default Index;

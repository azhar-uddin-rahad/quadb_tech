
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Modal_button from '../Modal_button/Modal_button/Modal_button';

const Home = () => {
  const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then (res => res.json())
        .then (data => setCategories(data));
        
    },[])
    return (
        <div >
{
  categories.map(categorie =>   <div key={categorie.show.id} className="card mb-3" >
  <Card.Header className='header-info d-flex justify-content-between p-3 mb-2'>
    <div className='movieTitle'> 
      <h1>{categorie.show.name}</h1>
     
       {categorie.show.premiered !== "null" &&   
       <>
       <p>Premiered:{categorie.show.premiered}</p>
       </>
        }
      <p>Schedule: {categorie.show.schedule?.time} - 
      {categorie.show.schedule?.days}
      </p>
    </div>
    <div className='movieTitle'>  
    {categorie.show.rating.average ?
      
      <i className='d-flex justify-content-center align-item-center gap-2'> <FaStar className='text-info fs-3'></FaStar><h6 className='fs-4'>{categorie.show.rating.average}</h6></i>
    :
    <i className='d-flex justify-content-center align-item-center gap-2'> <FaStar className='text-info fs-3'></FaStar><h6 className='fs-4'>0.0</h6></i>
    
    }
    </div>
    
  </Card.Header>
<div className="row g-0">
  <div className="row-sm-12 col-md-4">

    <img src={categorie.show.image?.medium} className="img-fluid rounded-start w-100" alt="Movice-Poster"/>

  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">About The Movie</h5>
      <>
      <div className='fs-4 pt-5' dangerouslySetInnerHTML={{ __html: `${categorie.show.summary}` }} />
     
      </>
      <div>
       
      </div>

    </div>
      {/* Modal section start */}
      <Modal_button
        categories={categorie.show}
      ></Modal_button>
  </div>
</div>
<Card.Footer>
  <div className='d-flex justify-content-between'>
    <div>
     <h5>Network: {categorie.show.network?.name}</h5>
     <h5>Schedule:{categorie.show.schedule?.days} at {categorie.show.schedule?.time} 
       </h5>
     <h5>Status: {categorie.show.status}</h5>
     
    </div>
    <div>
    <h5>Show Type: {categorie.show.type}</h5> 
    <h5>Genres: {categorie.show.genres[0]} | {categorie.show.genres[1]}</h5>
    
      {categorie.show.network?.officialSite &&
      
      <h5>  Official site: {categorie.show.network?.officialSite}</h5>}
    </div>
  </div>


</Card.Footer>

</div>)
}




 </div>
    );
};

export default Home;
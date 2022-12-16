
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div >
  <div class="card mb-3" >
    <div className='header-info d-flex '>
      <div className='movieTitle'> 
        <h1>Hellow world</h1>
      </div>
      <div className='movieTitle'> 
        <h1>Hellow world</h1>
      </div>
      
    </div>
  <div class="row g-0">
    <div class="col-md-4">
     
      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

</div>




        </div>
    );
};

export default Home;
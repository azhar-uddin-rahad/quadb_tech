import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then (res => res.json())
        .then (data => setCategories(data));
        
    },[])
    console.log()


    return (
        <div>
            <h3>All Category: {categories.length}</h3>
            {
                categories.map(categori => <div
                key={categori.show.id}><Link class="text-decoration-none" to={`/category/${categori.show.id}`}> 
<div class="card mb-3 h-25">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={categori.show.image?.medium} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-dark">Card title</h5>
        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text text-dark"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</Link>
                
                
                </div>)
            }
        </div>
    );
};

export default LeftSidebar;
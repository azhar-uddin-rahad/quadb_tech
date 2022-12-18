import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Share/Loading/Loading';

const LeftSidebar = () => {
    /*
    const [categories,setCategories] = useState([]);
    if(!categories){
      <Loading></Loading>
    }
     useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then (res => res.json())
        .then (data => setCategories(data));
        
    },[]) */
    const { data: categories, isLoading } = useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
       
        return data;
      },
    });
    
    if(!isLoading){
      <Loading></Loading>
    }

    return (
        <div>
            {/* <h3>All Category: {categories.length}</h3> */}
            {
                categories?.map(categori => <div 
                key={categori.show.id}><Link className="text-decoration-none"  to={`/shows/${categori.show.id}`}> 
<div className="card mb-4">
  <div className="row g-0">
    <div className="col-md-2">
      <img src={categori.show.image?.medium} className="img-fluid rounded-start w-100 h-100"  alt="..."/>
    </div>
    <div className="col-md-1"> 
    </div>
    <div className="col-md-6 text-center align-item-center">
      <div className="card-body">
        <h5 className="card-title text-dark">{categori.show.name}</h5>  
      </div>
    </div>
    <div className="col-md-2"> 
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
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

        </div>
    );
};

export default LeftSidebar;
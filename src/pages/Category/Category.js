import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Modal_button from "../Modal_button/Modal_button/Modal_button";
import Loading from "../Share/Loading/Loading";

const Category = () => {
  const categorie = useLoaderData();
  if(!categorie){
    return <Loading></Loading>
  }
   
  return (
    <div>
      <div key={categorie.id} className="card mb-3">
        <Card.Header className="header-info d-flex justify-content-between p-3 mb-2">
          <div className="movieTitle">
            <h1>{categorie.name}</h1>

            {categorie.premiered !== "null" && (
              <>
                <p>Premiered:{categorie.premiered}</p>
              </>
            )}
            <p>
              Schedule: {categorie.schedule?.time} -{categorie.schedule?.days}
            </p>
          </div>
          <div className="movieTitle">
            {categorie.rating.average ? (
              <i className="d-flex justify-content-center align-item-center gap-2">
                {" "}
                <FaStar className="text-info fs-3"></FaStar>
                <h6 className="fs-4">{categorie.rating.average}</h6>
              </i>
            ) : (
              <i className="d-flex justify-content-center align-item-center gap-2">
                {" "}
                <FaStar className="text-info fs-3"></FaStar>
                <h6 className="fs-4">0.0</h6>
              </i>
            )}
          </div>
        </Card.Header>
        <div className="row g-0">
          <div className="row-sm-12 col-md-4">
            <img
              src={categorie.image?.medium}
              className="img-fluid rounded-start w-100"
              alt="Movice-Poster"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About The Movie</h5>
              <>
                <div
                  className="fs-4 pt-5"
                  dangerouslySetInnerHTML={{ __html: `${categorie.summary}` }}
                />
              </>
              <div>
                <div></div>
              </div>
              {/* Modal section start */}
              {/*  <Modal_category  
     categories={categorie}
     ></Modal_category> */}

              <Modal_button categories={categorie}></Modal_button>
            </div>
          </div>
        </div>
        <Card.Footer>
          <div className="d-flex justify-content-between">
            <div>
              <h5>Network: {categorie.network?.name}</h5>
              <h5>
                Schedule:{categorie.schedule?.days} at{" "}
                {categorie.schedule?.time}
              </h5>
              <h5>Status: {categorie.status}</h5>
            </div>
            <div>
              <h5>Show Type: {categorie.type}</h5>
              <h5>
                Genres: {categorie.genres[0]} | {categorie.genres[1]}
              </h5>

              {categorie.network?.officialSite && (
                <h5>Official site: {categorie.network?.officialSite}</h5>
              )}
            </div>
          </div>
        </Card.Footer>
      </div>
    </div>
  );
};

export default Category;

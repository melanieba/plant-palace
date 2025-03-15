import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PlantImage from "../components/PlantImage";
import '../style.css'

export function Article({plant}) {
    if (!plant) {
        return <p>Loading plant data...</p>;
    }

    return (
        <>
          <article id="article">
            <PlantImage plant={plant} target="list"/>
            <div>
              <h1 id="plant-name-article">
                <Link to={`/plant/${plant.id}`} state={{ plant }}>
                  {plant.name}
                </Link>
              </h1>
              <p>
                Species: {plant.species}
                <br></br>
                Stage: {plant.stage}
                {plant.cultivar && <><br></br>
                Cultivar: {plant.cultivar}</>}
              </p>
            </div>
          </article>
        </>
    );
}

export default Article;

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
          <article className="article">
            <PlantImage plant={plant}/>
            <h1>
              <Link to={`/plant/${plant.id}`} state={{ plant }}>
                {plant.name}
              </Link>
            </h1>
            <p>Species: {plant.species}</p>
            <p>Stage: {plant.stage}</p>
          </article>
        </>
    );
}

export default Article;

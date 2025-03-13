import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PlantImage from "../components/PlantImage";
import '../style.css'

export function Article({plant}) {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("https://cpsc4910sq24.s3.amazonaws.com/data/plants.json") 
          .then((response) => response.json())
          .then((data) => setPlants(data))
          .catch((error) => console.error("Error fetching plants:", error));
      }, []);
  
    if (!plant) {
        return <p>Loading plant data...</p>;
    }

    return (
        <>
          <article className="plant-card">
            <PlantImage plant={plant}/>
            <h1>
              <Link to={'/plants'} state={{ plant }}>
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

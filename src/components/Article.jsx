import React, { useEffect, useState } from 'react';
import '../style.css'

const plantImages = {
    "Arugula": "https://cpsc4910sq24.s3.amazonaws.com/images/arugula.jpg",
    "Bell pepper": "https://cpsc4910sq24.s3.amazonaws.com/images/bell-pepper.jpg",
    "Lettuce": "https://cpsc4910sq24.s3.amazonaws.com/images/butter-lettuce.jpg",
    "Green leaf": "https://cpsc4910sq24.s3.amazonaws.com/images/green-leaf-lettuce.jpg",
    "Strawberry": "https://cpsc4910sq24.s3.amazonaws.com/images/strawberry.jpg"
  };

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

    const imageUrl = plantImages[plant.species];

    return (
        <>
          <article className="plant-card">
            <img src={imageUrl} alt={plant.name} className="plant-image" />
            <h1>{plant.name}</h1>
            <p>Species: {plant.species}</p>
            <p>Stage: {plant.stage}</p>
          </article>
        </>
    );
}

export default Article;

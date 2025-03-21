import React, { useEffect, useState } from 'react';
import Article from "../components/Article";

export function ListingPage() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
      fetch("https://cpsc4910sq24.s3.amazonaws.com/data/plants.json") 
        .then((response) => response.json())
        .then((data) => setPlants(data))
        .catch((error) => console.error("Error fetching plants:", error));
    }, []);

    return (
      <>
        <h1 id="title">Plant Palace</h1>

        <details open className="location-dropdown">
          <summary>Greenhouse</summary>
          {plants
            .filter((plant) => plant.location === "Greenhouse") 
            .map((plant) => <Article key={plant.id} plant={plant} />)
          }
        </details>

        <details open className="location-dropdown">
          <summary>Living room hydroponics</summary>
          {plants
            .filter((plant) => plant.location === "Living room hydroponics") 
            .map((plant) => <Article key={plant.id} plant={plant} />)
          }
        </details>

        <details open className="location-dropdown">
          <summary>Front yard</summary>
          {plants
            .filter((plant) => plant.location === "Front yard") 
            .map((plant) => <Article key={plant.id} plant={plant} />)
          }
        </details>

      </>
    );
};

export default ListingPage;



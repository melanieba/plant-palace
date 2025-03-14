import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import NameHeader from '../components/NameHeader';
import PlantImage from "../components/PlantImage";
import HarvestData from "../components/HarvestData";

export function DetailsPage() {
    const { id } = useParams();
    const [plant, setPlant] = useState([]);

    useEffect(() => {
      fetch("https://cpsc4910sq24.s3.amazonaws.com/data/plants.json") 
        .then((response) => response.json())
        .then((data) => setPlant(data.find((plant) => plant.id == id)))
        .catch((error) => console.error("Error fetching plant:", error));
    }, [id]);

    if (!plant) return <p>No plant data available.</p>;

    return (
        <>
          <NameHeader plant={ plant }/>
          <PlantImage plant={ plant }/>
          <p>Species: {plant.species}</p>
          <p>Stage: {plant.stage}</p>
          <h2>Harvests</h2>
          {plant && plant.id && <HarvestData plantId={plant.id} />}
        </>
    );
}

export default DetailsPage;
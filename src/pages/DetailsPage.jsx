import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import NameHeader from '../components/NameHeader';
import PlantImage from "../components/PlantImage";
import HarvestData from "../components/HarvestData";
import '../style.css'

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
          <div id="details-page"> 
            <div id="left-details">
              <PlantImage plant={ plant } target="details"/>
              <p>
                Species: {plant.species}
                <br></br>
                Stage: {plant.stage}
                {plant.cultivar && <><br></br>
                Cultivar: {plant.cultivar}</>}
              </p>
            </div>
            <div id="right-details">
              <h2>Harvests</h2>
              {plant && plant.id && <HarvestData plantId={plant.id} />}
            </div>
          </div>
        </>
    );
}

export default DetailsPage;
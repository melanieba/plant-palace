import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import NameHeader from '../components/NameHeader';
import PlantImage from "../components/PlantImage";

export function DetailsPage() {
    console.log("DetailsPage is rendering!")

    const location = useLocation();
    const plant = location.state?.plant;
    if (!plant) return <p>No plant data available.</p>;

    return (
        <>
          <NameHeader plant={ plant }/>
          <PlantImage plant={ plant }/>
          <p>Species: {plant.species}</p>
          <p>Stage: {plant.stage}</p>
        </>
    );
}

export default DetailsPage;
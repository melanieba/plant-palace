import React from "react";

const plantImages = {
    "Arugula": "https://cpsc4910sq24.s3.amazonaws.com/images/arugula.jpg",
    "Bell pepper": "https://cpsc4910sq24.s3.amazonaws.com/images/bell-pepper.jpg",
    "Lettuce": "https://cpsc4910sq24.s3.amazonaws.com/images/butter-lettuce.jpg",
    "Green leaf": "https://cpsc4910sq24.s3.amazonaws.com/images/green-leaf-lettuce.jpg",
    "Strawberry": "https://cpsc4910sq24.s3.amazonaws.com/images/strawberry.jpg"
};

export function PlantImage({plant}) {
    const imageUrl = plantImages[plant.species];

    return (
      <>
        <img src={imageUrl} alt={plant.name} className="plant-image" />
      </>
    );
}

export default PlantImage;
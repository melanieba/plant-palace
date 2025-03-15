import React, { useEffect, useState } from 'react';

export function HarvestData({ plantId }) {
    const [harvests, setHarvests] = useState([]);

    useEffect(() => {
        fetch(`https://cpsc4910sq24.s3.amazonaws.com/data/plants/${plantId}/harvests.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setHarvests(data);
            })
            .catch((error) => console.error("Error fetching harvests:", error));
    }, [plantId]);

    if (!harvests || harvests.length == 0) {
        return <p>No harvests</p>
    }

    return (
      <>
        <table className="harvest-table">
          <thead>
            <tr>
            <th>Date</th>
            <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {harvests.map((plant, index) => (  
            <tr key={plant.id ?? index}>  
            <td>{plant.Date}</td>
            <td>{plant.Amount}</td>
            </tr>
          ))}
          </tbody>
        </table> 
      </>
    );
}

export default HarvestData;
import React, { useEffect, useState } from 'react';
import '../style.css'

export function NameHeader({plant}) {
    return (
      <>
        <h1 id="name-header">{plant.name}</h1>
      </>
    );
}

export default NameHeader;
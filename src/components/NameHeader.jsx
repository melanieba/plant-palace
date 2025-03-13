import React, { useEffect, useState } from 'react';

export function NameHeader({plant}) {
    return (
      <>
        <h1>{plant.name}</h1>
      </>
    );
}

export default NameHeader;
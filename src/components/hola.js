import React from 'react';

function hola({mensaje, pie}) {
    return (
        <div>
            <h1>PUCESE</h1>
            <h2>{mensaje}</h2>
            <h3>{pie}</h3>
        </div>
    );
}

export default hola;
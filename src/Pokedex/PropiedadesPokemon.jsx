import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PropiedadesPokemon = ({ nombrePokemon, url }) => {
    const [infoPokemon, setInfoPokemon] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((respuesta) => {
                setInfoPokemon(respuesta.data);
            })
            .catch((error) => {
                console.error('Error al encontrar la informacion de los Pokemon:', error);
            });
    }, [url]);

    return (
        <ul>
            {infoPokemon && (
                <>
                    <img src={infoPokemon.sprites.front_default} alt={nombrePokemon} />
                </>
            )}
            <br />
            <strong>{nombrePokemon} </strong> <br />
        </ul>
    );
};
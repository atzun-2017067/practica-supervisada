import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";

import axios from 'axios';
import { PropiedadesPokemon } from './PropiedadesPokemon';

export const ListaPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error('Error al encontrar los pokemones:', error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="container-fluid vista">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h1 className='text-center'>Listado de los 50 pokemons</h1>
            </div>
            <div className='col-1'></div>
            {pokemons.map((pokemon, id) => (
              <div className='col-3'>
                <PropiedadesPokemon key={id} nombrePokemon={pokemon.name} url={pokemon.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
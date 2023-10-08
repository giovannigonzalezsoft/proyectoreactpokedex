import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
export const PokemonCard = ({ pokemon }) => {
  const [showPokemonDetail, setShowPokemonDetail] = useState(false);

  const handleShowPokemon = () => {
    setShowPokemonDetail(true);
    console.log(showPokemonDetail);
  };
  const handleClose = () => setShowPokemonDetail(false);

  return (
    <div>
      <div className="card-pokemon" onClick={handleShowPokemon}>
        <div className="card-img">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className="card-info">
          <span className="pokemon-id">N° {pokemon.id}</span>
          <h3>{pokemon.name}</h3>
          <div className="card-types">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      {showPokemonDetail && (
        <Modal show={showPokemonDetail} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pokemon.name.toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Altura: {pokemon.height * 10} cm
            <br />
            Peso: {pokemon.weight * 0.453592} kg
            <br />
            Movimientos: {pokemon.moves.length}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

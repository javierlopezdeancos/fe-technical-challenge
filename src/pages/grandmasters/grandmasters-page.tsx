import React, { use } from 'react'
import getGrandMastersApi from '../../grandmasters/get-grandmasters-api';
import { type GrandmasterPlayerName } from '../../grandmasters/grandmasters';

function GrandmastersPage(): React.ReactElement {
  const grandmasters = use(getGrandMastersApi());

  return (
    <>
      <h1>GrandMastersPage</h1>
      <ul>
        {grandmasters.players.map((player:GrandmasterPlayerName) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </>
  )
}

export default GrandmastersPage

import React, { use } from 'react'
import getGrandMastersApi from '../grandmasters/get-grandmasters-api';
import { type GrandmasterPlayerName } from '../grandmasters/grandmasters';

const grandmastersPromise = getGrandMastersApi();

function GrandmastersPage(): React.ReactElement {
  const grandmasters = use(grandmastersPromise);

  return (
    <main>
      <h1>Grandmasters</h1>
      <ul>
        {grandmasters.players.map((player:GrandmasterPlayerName) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </main>
  )
}

export default GrandmastersPage

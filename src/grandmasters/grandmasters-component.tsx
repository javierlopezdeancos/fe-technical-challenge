import React, { use } from 'react'
import { Link } from '@tanstack/react-router'
import getGrandMastersApi from './get-grandmasters-api.ts'
import { type GrandmasterUsername } from './grandmasters.ts'
import GrandmastersSkeletonComponent from './grandmasters-skeleton-component.tsx'

const grandmastersPromise = getGrandMastersApi();

function GrandmastersPage(): React.ReactElement {
  const grandmasters = use(grandmastersPromise);

  return (
    <main>
      {!grandmasters ?
        <>
          <h1>Grandmasters</h1>
          <ul>
            {grandmasters.players.map((player:GrandmasterUsername) => (
              <li key={player}>
                <Link to="/$username" params={{ username: player }}>
                  {player}
                </Link>
              </li>
            ))}
          </ul>
        </>
        :
        <GrandmastersSkeletonComponent />
      }
    </main>
  )
}

export default GrandmastersPage

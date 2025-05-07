import React, { use } from 'react'
import { Link } from '@tanstack/react-router'
import getGrandMastersApi from './get-grandmasters-api.ts'
import { type GrandmasterUsername } from './grandmasters.ts'
import GrandmastersSkeletonComponent from './grandmasters-skeleton-component.tsx'
import TypographyHeader1Component from '@/components/typography-header-1-component.tsx'
import TypographyParagraphComponent from '@/components/typography-paragraph-component.tsx'

const grandmastersPromise = getGrandMastersApi();

function GrandmastersPage(): React.ReactElement {
  const grandmasters = use(grandmastersPromise)

  return (
    <main>
      <div className="flex flex-col gap-10 items-start space-x-4 w-full">
        <TypographyHeader1Component>Grandmasters</TypographyHeader1Component>
        {grandmasters ?
            <ul className="my-0 ml-0 [&>li]:mt-0">
              {grandmasters.players.map((player:GrandmasterUsername) => (
                <li key={player}>
                  <Link to="/$username" params={{ username: player }}>
                    <TypographyParagraphComponent>{player}</TypographyParagraphComponent>
                  </Link>
                </li>
              ))}
            </ul>
          :
          <GrandmastersSkeletonComponent />
        }
      </div>
    </main>
  )
}

export default GrandmastersPage

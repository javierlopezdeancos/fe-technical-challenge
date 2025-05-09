import React, { use } from 'react'
import { Link } from '@tanstack/react-router'
import getGrandMastersApi from './get-grandmasters-api.ts'
import { type GrandmasterUsername } from '../grandmaster.ts'
import GrandmastersSkeletonComponent from './grandmasters-skeleton-component.tsx'
import TypographyHeader1Component from '@/components/typography/typography-header-1-component.tsx'
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import ScrollAreaComponent from '@/components/scroll-area/scroll-area-component.tsx'

const grandmastersPromise = getGrandMastersApi();

function GrandmastersPage(): React.ReactElement {
  const grandmasters = use(grandmastersPromise)

  if (Array.isArray(grandmasters) && grandmasters.length === 0) {
    return <TypographyParagraphComponent>No grandmasters found</TypographyParagraphComponent>
  }

  return (
    <main>
      <div className="flex flex-col gap-10 items-start space-x-4 w-full">
        <TypographyHeader1Component>Grandmasters</TypographyHeader1Component>
          <ScrollAreaComponent style={{ height: "calc(100vh - 170px)"}}>
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
            <GrandmastersSkeletonComponent />}
          </ScrollAreaComponent>
      </div>
    </main>
  )
}

export default GrandmastersPage

import React from 'react'
import { getRouteApi } from '@tanstack/react-router'
import AvatarComponent, { AvatarImageComponent, AvatarFallbackComponent } from '@/components/avatar-component.tsx'
import CardComponent, { CardTitleComponent, CardContentComponent } from '@/components/card-component.tsx'
import TypographyHeader1Component from '@/components/typography/typography-header-1-component'
import BadgeComponent from '@/components/badge/badge-component.tsx'
import SeparatorComponent from '@/components/separator-component.tsx'

function GrandmasterPage(): React.ReactElement | null {
  const grandmasterApi = getRouteApi('/$username')
  const grandmaster = grandmasterApi.useLoaderData()

  return (
    <main>
      <CardComponent className="w-full px-5">
        <CardContentComponent className='px-0'>
          <div className='flex flex-row items-start justify-start gap-6'>
            <AvatarComponent className="size-24" >
              <AvatarImageComponent className="size-24" src={grandmaster.avatar} alt="@shadcn" />
              <AvatarFallbackComponent>CN</AvatarFallbackComponent>
            </AvatarComponent>
            <div className='w-full flex flex-col items-start justify-center gap-3'>
              <CardTitleComponent className='w-auto'><TypographyHeader1Component>{grandmaster.username}</TypographyHeader1Component></CardTitleComponent>
              <div className='flex flex-row items-center justify-start gap-6'>
                <BadgeComponent>{grandmaster.title}</BadgeComponent >
              </div>
              <SeparatorComponent className='my-5' />
            </div>
          </div>
        </CardContentComponent>
      </CardComponent>
    </main>
  )
}

export default GrandmasterPage

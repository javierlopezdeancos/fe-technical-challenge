import { getRouteApi } from '@tanstack/react-router'
import ReactCountryFlag from "react-country-flag"
import { MapPin } from 'lucide-react';
import AvatarComponent, { AvatarImageComponent, AvatarFallbackComponent } from '@/components/avatar/avatar-component.tsx'
import CardComponent, { CardTitleComponent, CardContentComponent } from '@/components/card/card-component.tsx'
import TypographyHeader1Component from '@/components/typography/typography-header-1-component.tsx'
import TypographyHeader3Component from '@/components/typography/typography-header-3-component.tsx'
import TypographyParagraphComponent from '@/components/typography/typography-paragraph-component.tsx'
import BadgeComponent from '@/components/badge/badge-component.tsx'
import getFormattedTimezoneDateFromTimestampHelper from '@/helpers/get-formatted-timezone-from-timestamp-helper.ts'
import getFormattedTimeAgoFromTimestampHelper from '@/helpers/get-formatted-time-ago-from-timestamp-helper.ts'
import getCountryCodeHelper from '@/helpers/get-country-code-helper.ts';

function GrandmasterPage(): React.ReactElement | null {
  const grandmasterApi = getRouteApi('/$username')
  const grandmaster = grandmasterApi.useLoaderData()
  const grandmasterJoinedDateFormatted = getFormattedTimezoneDateFromTimestampHelper(grandmaster.joined)
  const grandmasterFromLastOnlineAgoDateFormatted = getFormattedTimeAgoFromTimestampHelper(grandmaster.last_online)
  const grandmasterCountryCode = getCountryCodeHelper(grandmaster.country)

  return (
    <main>
      <div className="flex flex-col gap-10 items-start space-x-4 w-full">
        <TypographyHeader1Component>Grandmaster</TypographyHeader1Component>
        <CardComponent className="w-full px-5">
          <CardContentComponent className='px-0'>
            <div className='flex flex-row items-start justify-start gap-6'>
              <AvatarComponent className="size-24" >
                <AvatarImageComponent className="size-24" src={grandmaster.avatar} alt="@shadcn" />
                <AvatarFallbackComponent>CN</AvatarFallbackComponent>
              </AvatarComponent>
              <div className='w-full flex flex-col items-start justify-center gap-3'>
                <CardTitleComponent className='w-auto'>
                  <TypographyHeader1Component>{grandmaster.username}</TypographyHeader1Component>
                </CardTitleComponent>
                <div className='flex flex-row items-center justify-start gap-6'>
                  <div className='flex flex-row items-center justify-center gap-2'>
                    <BadgeComponent>{grandmaster.title}</BadgeComponent >
                    <TypographyHeader3Component>{grandmaster.name}</TypographyHeader3Component>
                    <ReactCountryFlag countryCode={grandmasterCountryCode}
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title={grandmasterCountryCode}
                    />
                  </div>
                  {grandmaster.location ?
                    <div className='flex flex-row items-center justify-center gap-2'>
                      <MapPin color="black" size={24} />
                      <TypographyParagraphComponent>
                        {grandmaster.location}
                      </TypographyParagraphComponent>
                    </div> : null}
                </div>
                <div className='flex flex-row items-center justify-start gap-6'>
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <TypographyParagraphComponent muted>Joined</TypographyParagraphComponent >
                    <TypographyParagraphComponent>{grandmasterJoinedDateFormatted}</TypographyParagraphComponent >
                  </div>
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <TypographyParagraphComponent muted>Last online</TypographyParagraphComponent >
                    <TypographyParagraphComponent>{grandmasterFromLastOnlineAgoDateFormatted}</TypographyParagraphComponent >
                  </div>
                </div>
              </div>
            </div>
          </CardContentComponent>
        </CardComponent>
      </div>
    </main>
  )
}

export default GrandmasterPage

import React from 'react'
import { getRouteApi } from '@tanstack/react-router'

function GrandmasterPage(): React.ReactElement | null {
  const grandmasterApi = getRouteApi('/$username')
  const grandmaster = grandmasterApi.useLoaderData()

  return (
    <main>
      <h1>Grandmaster</h1>
      <p>{grandmaster.username}</p>
    </main>
  )
}

export default GrandmasterPage

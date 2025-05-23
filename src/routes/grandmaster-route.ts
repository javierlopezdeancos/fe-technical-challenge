import { createRoute } from '@tanstack/react-router'
import GrandmasterPage from '@/grandmaster/grandmaster-component.tsx'
import rootRoute from './root-route.tsx'
import getGrandMasterApi from '@/grandmaster/get-grandmaster-api.ts'

export const grandmasterRoute = createRoute({
  path: '/$username',
  component: GrandmasterPage,
  getParentRoute: () => rootRoute,
  loader: async ({ params }) => {
    return getGrandMasterApi(params.username)
  }
})

export default grandmasterRoute

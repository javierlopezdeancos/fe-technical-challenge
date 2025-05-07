import { createRoute } from '@tanstack/react-router'
import GrandmasterPage from '../grandmasters/grandmaster-component.tsx';
import rootRoute from './root-route.tsx';
import getGrandMasterApi from '../grandmasters/get-grandmaster-api.ts'

export const grandmasterRoute = createRoute({
  path: '/$username',
  component: GrandmasterPage,
  getParentRoute: () => rootRoute,
  loader: async ({ params }) => {
    console.log("username: ", params.username)
    return getGrandMasterApi(params.username)
  },
})

export default grandmasterRoute;

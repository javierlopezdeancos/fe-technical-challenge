import { createRootRoute } from '@tanstack/react-router'
import GrandmastersPage from '../pages/grandmasters-page';

export const rootRoute = createRootRoute({
  component: GrandmastersPage,
})

export default rootRoute;

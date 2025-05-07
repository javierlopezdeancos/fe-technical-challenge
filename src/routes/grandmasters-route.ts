import { createRoute } from '@tanstack/react-router'
import GrandmastersPage from '../grandmasters/grandmasters-component.tsx';
import rootRoute from './root-route.tsx';

export const grandmastersRoute = createRoute({
  path: '/',
  component: GrandmastersPage,
  getParentRoute: () => rootRoute,
})

export default grandmastersRoute;

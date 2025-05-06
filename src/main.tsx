import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import ErrorBoundaryComponent from './components/error-boundary-component.tsx'
import rootRoute from './routes/root-route.tsx'
import './index.css'

const routeTree = rootRoute

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <ErrorBoundaryComponent fallback={<div>Error</div>}>
        <RouterProvider router={router} />
      </ErrorBoundaryComponent>
    </StrictMode>,
  )
}

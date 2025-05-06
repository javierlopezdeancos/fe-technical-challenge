import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import ErrorBoundaryComponent from './components/error-boundary-component.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundaryComponent fallback={<div>Error</div>}>
      <App />
    </ErrorBoundaryComponent>
  </StrictMode>,
)

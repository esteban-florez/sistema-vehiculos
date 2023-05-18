import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Form from './components/Form'

createRoot(document.querySelector('#reactRoot')).render(
  <StrictMode>
    <Form />
  </StrictMode>
)

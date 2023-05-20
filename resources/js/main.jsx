import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Form from './components/Form'

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Form />
  </StrictMode>
)

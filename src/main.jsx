import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './todo/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)

import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let cobject = createContext()
let data = {
   name:"vishal", age:20, city:"bhopal"
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <cobject.Provider value={data}> 
    <App />
    </cobject.Provider>
  </StrictMode>,
)
export {cobject}
 
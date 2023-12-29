import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#F5F5F5]'>
      <div className='max-w-5xl mx-auto'>
        <RouterProvider router={Routes} />
      </div>
    </div>
  </React.StrictMode>,
)

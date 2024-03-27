import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from '/src/MyRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import { TasksProvider } from './Context/TasksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksProvider>
      <RouterProvider router={MyRoutes} />
    </TasksProvider>
  </React.StrictMode>,
);
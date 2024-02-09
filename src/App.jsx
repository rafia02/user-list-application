import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rootlayout from './Layout/Rootlayout'
import UserList from './Components/UserList/UserList'
import UserDetails from './Components/UserList/UserDetails'



export const router = createBrowserRouter([
  {
      path: "/",
      element: <Rootlayout></Rootlayout>,
      children: [
        {
          path: "/",
          element: <UserList></UserList>
         },
         
         {
          path: "/user/:id",
          element: <UserDetails></UserDetails>,
          loader: async ( {params} ) => fetch(`https://dummyjson.com/users/${params.id}`)
         },


  ]
  }
])






function App() {
  
  

  return (
    <div className='px-5 max-w-screen-xl mx-auto '>   
      <RouterProvider router={router} ></RouterProvider>   
    </div>
  )
}

export default App

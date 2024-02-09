import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rootlayout from './Layout/Rootlayout'
import UserList from './Components/UserList/UserList'



export const router = createBrowserRouter([
  {
      path: "/",
      element: <Rootlayout></Rootlayout>,
      children: [
        {
          path: "/",
          element: <UserList></UserList>
         },
         
        //  {
        //   path: "/blogdatails/:id",
        //   element: <Blogdatails/>,
        //   loader: async ( {params} ) => fetch(`https://doodleincblog.vercel.app/blog/${params.id}`)
        //  },
        //  {
        //   path: "/allblogs",
        //   element: <Allblogsmanage/>
        //  },
        //  {
        //   path: "/favorite",
        //   element: <Favorite/>
        //  }

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

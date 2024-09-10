import React from 'react'
import Navbar from '../components/navbar'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <header>
            <Navbar/>
        </header>
        <main>
            main
        </main>
    </div>
  )
}

export default Layout
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import TileInteraction from '../components/tileInteraction'
import LayoutBuilder from '../components/layoutBuilder'

const Layout = () => {
    return (
        <div className='bg-slate-700 overflow-hidden h-screen'>
            <div className='flex flex-col'>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<LayoutBuilder />} />
                        <Route path='/layout-builder' element={<LayoutBuilder />} />
                        <Route path='/tile-interaction' element={<TileInteraction />} />
                    </Routes>
                </main>
            </div>
        </div>

    )
}

export default Layout
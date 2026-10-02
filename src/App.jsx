import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
// import { Home } from './pages/Home.jsx';
// import { Empleos } from './pages/Empleos.jsx';
// import { JobDetails } from './pages/Details.jsx';
// import { NotFoundPage } from './pages/404.jsx';

const Home = lazy(() => import('./pages/Home.jsx'))
const Empleos = lazy(() => import('./pages/Empleos.jsx'))
const JobDetails = lazy(() => import('./pages/Details.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))


function App() {
  return (
    <>
    <Navbar/>
      <main>
        
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Empleos/>} />
            <Route path="/jobs/:id" element={<JobDetails/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Suspense>

      </main>
    <Footer/>
    </>
  )
}

export default App

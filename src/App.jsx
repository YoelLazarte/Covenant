import { useState } from 'react'
// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Pagination from './components/Pagination.jsx';

// Pages
import { Empleos } from './pages/Empleos.jsx';

import data from './data.json'


const RESULTS_PER_PAGE = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / RESULTS_PER_PAGE)

  const pagedResuls = data.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )

  const handlePageChange = (newPage) => {
    console.log(`Página cambiada a ${newPage}`);
    setCurrentPage(newPage)
  }


  return (
    <>
    <Navbar/>
    <main>
      <Empleos data={pagedResuls}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </main>

    <Footer/>
    </>
  )
}

export default App

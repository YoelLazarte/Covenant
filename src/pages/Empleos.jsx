import { useState } from 'react'

import { SearchFormSection } from '../components/SearchFormSection.jsx'
import { JobsListings } from '../components/JobsListings.jsx'
import { Pagination } from '../components/Pagination.jsx';

import data from '../data.json'


const RESULTS_PER_PAGE = 5;



export function Empleos() {
  const [filters, setFilters] = useState({
    technology: '',
    modality: '', 
    level: '',
  })
  const [textToFilter, setTextToFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const jobsFilteredByFilters = data.filter(job => { 
    return(
      (filters.technology === '' || job.data.technology === filters.technology)
      && (filters.modality === '' || job.data.modality === filters.modality)
      && (filters.level === '' || job.data.level === filters.level)
    )
  })

  console.log('filtros : ', jobsFilteredByFilters)
  
  const jobsWithTextFilter = textToFilter === ''
  ? jobsFilteredByFilters
  : jobsFilteredByFilters.filter(job => {
    return job.title.toLowerCase().includes(textToFilter.toLowerCase())
    || job.company.toLowerCase().includes(textToFilter.toLowerCase())
  })
  
  console.log('texto filtrado : ', jobsWithTextFilter)

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

  const pagedResuls = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )

  const handlePageChange = (newPage) => {
    console.log(`Página cambiada a ${newPage}`);
    setCurrentPage(newPage)
  }

  const handleSearch = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1)
  }


  return(
    <>
      <section>
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter}/>
      </section>

      <JobsListings jobs={pagedResuls}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </>
  )
}

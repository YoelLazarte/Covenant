import JobCard from './JobCard.jsx'

export function JobsListings({ jobs }){
  return( 
    <>
    <section>
      <h2>Resultados de busqueda</h2>
      <div className="jobs-listings">
        {
          jobs.length === 0 && (
            <p style={{ textAlign: 'center', padding:'1rem' }}>No se han encontrado empleos que coincidan con tu busqueda</p>
          )
        }
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
    </>
  )
}

import JobCard from './JobCard.jsx'

export function JobsListings({ jobs }){
  return( 
    <>
    <section>
      <h2>Resultados de busqueda</h2>
      <div className="jobs-listings">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
    </>
  )
}

import { useState } from 'react'

function JobCard({ job }){
  const [apply, setapply] = useState(false);

  function handleButton(){
    setapply(true);
  }

  const buttonClasses = apply ? 'button-apply-job is-applied' : 'button-apply-job'
  const buttonText = apply ? 'Aplicado' : 'Aplicar'
  return(
  <>
    <article 
      data-technology={job.data.technology} 
      data-modality={job.data.modality} 
      data-level={job.data.level} 
      className="job-listings-card">
      <div>
        <h3>{job.title}</h3>
        <small>{job.company} | {job.location}</small>
        <p>{job.description}</p>
      </div>
      <button 
        className={buttonClasses}
        onClick={handleButton}
        >{buttonText}</button>
    </article>
  </>
  )
}

export default JobCard
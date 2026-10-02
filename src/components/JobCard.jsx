import { useState } from 'react'
import { Link } from '../components/Links.jsx';
import styles from '../css/JobCard.module.css'

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
      data-modality={job.data.modalidad} 
      data-level={job.data.nivel} 
      className="job-listings-card">
      <div>
        <h3>
          <Link className={styles.title} href={`/jobs/${job.id}`}>
            {job.titulo}
          </Link>/
        </h3>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>

      <div className={styles.actions}>
        <Link href={`/jobs/${job.id}`} className={styles.details}>Ver detalles</Link>
        <button 
          className={buttonClasses}
          onClick={handleButton}
        > {buttonText}</button>

      </div>
    </article>
  </>
  )
}

export default JobCard
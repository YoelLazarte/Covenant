import { JobsListings } from '../components/JobsListings.jsx'

export function Empleos({ data }) {
  return(
    <>
    <section>
        <h1>Encuentra tu proxima trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnologico</p>

      <form id="empleos-search-form" role="search">
        <div className="search-bar">
          <span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </span>
  
          <input name="search" id="empleos-search-input" required type="text" placeholder="Buscar trabajos, empresas o habilidades" />
        </div>

        <div className="search-filters">
          <select name="technology" id="filter-technology">
            <option value="Tecnologia">Tecnologia</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Tecnologia">Tecnologia</option>
          </select>

          <select name="location" id="filter-location">
              <option value="">Ubicación</option>
              <option value="remoto">Remoto</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="caba">Buenos Aires</option>
              <option value="monterrey">Monterrey</option>
              <option value="barcelona">Barcelona</option>
          </select>

          <select name="selectedOption" id="myDropdown">
            <option value="Tipo de contrato">Tipo de contrato</option>
            <option value="Tipo de contrato">Tipo de contrato</option>
            <option value="Tipo de contrato">Tipo de contrato</option>
          </select>

          <select name="selectedOption" id="myDropdown">
            <option value="Nivel de experiencia">Nivel de experiencia</option>
            <option value="Nivel de experiencia">Nivel de experiencia</option>
            <option value="Nivel de experiencia">Nivel de experiencia</option>
          </select>
        </div>
      </form>

      <span id="filter-selected-value"></span>
    </section>
    
    <JobsListings jobs={data}/>

  </>
  )
}

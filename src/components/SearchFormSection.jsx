import { useId } from "react";

export function SearchFormSection({ onSearch, onTextFilter }){
  const idText = useId();
  const idTechnology = useId();
  const idModality = useId();
  const idExperienceLevel = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      modality: formData.get(idModality),
      level: formData.get(idExperienceLevel),
    }

    onSearch(filters);
    console.log(filters);
  }

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    onTextFilter(inputValue);
  }

  return (
    <>
      <h1>Encuentra tu proxima trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnologico</p>
      <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
        <div className="search-bar">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </span>

            <input
              name={idText}
              onChange={handleTextChange}
              id="empleos-search-input"
              type="text"
              placeholder="Buscar trabajos, empresas o habilidades"
            />
            <button type="submit">buscar</button>
        </div>
        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnologia</option>
            <option value="react">React</option>
            <option value="python">Python</option>
            <option value="node">Node</option>
          </select>

          <select name={idModality} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="caba">Buenos Aires</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          {/* <select name="selectedOption" id="myDropdown">
            <option value="Tipo de contrato">Tipo de contrato</option>
            <option value="Tipo de contrato">Tipo de contrato</option>
            <option value="Tipo de contrato">Tipo de contrato</option>
          </select> */}

          <select name={idExperienceLevel} id="myDropdown">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Semi-Senior</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </form>
      <span id="filter-selected-value"></span>
    </>
  );
}
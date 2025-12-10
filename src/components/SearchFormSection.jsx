import { useEffect, useId, useState, useRef } from "react";

const useSearchForm = ({ idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter, idText }) => {
  const timeoutId = useRef(null)
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.targe || event.currentTarget
    const formData = new FormData(event.currentTarget);
    
    if(event.target.name === idText){
      return
    }
    
    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    }

    onSearch(filters);
    // console.log(filters);
  }

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue); // Actualizamos el imput inmediatamente

    // DEBOUNCE: Cancelar el timeout anterior
    if(timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(() => {
      onTextFilter(inputValue);
    }, 500)
  }

  return {
    searchText,
    handleSubmit,
    handleTextChange,
  }
}

export function SearchFormSection({ onSearch, onTextFilter, initialtext }){
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();
  const inputRef = useRef(null);
  console.log('que mierda llega aca', initialtext)
  const {
    // searchText, 
    handleSubmit,
    handleTextChange 
  } = useSearchForm({
      idTechnology, 
      idLocation, 
      idExperienceLevel, 
      onSearch, 
      onTextFilter,
      idText});
  
  const handleClearInput = (event) => {
    event.preventDefault();
    inputRef.current.value = '';
    onTextFilter("");
  }
  

  return (
    <>
      <h1>Encuentra tu proxima trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnologico</p>
      <form onChange={handleSubmit} id="empleos-search-form" role="search">
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
            ref={inputRef}
            name={idText} id="empleos-search-input" type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleTextChange}
            defaultValue={initialtext}
          />

          <button onClick={handleClearInput}> x </button>

        </div>
        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnologia</option>
            <option value="react">React</option>
            <option value="python">Python</option>
            <option value="node">Node</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
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
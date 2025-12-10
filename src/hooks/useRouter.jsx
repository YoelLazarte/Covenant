import { useEffect, useState } from 'react';

export function useRouter(){
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handleLocationChange)
    // Limpiamos la subscripcio del evento popstate
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      setCurrentPath(window.location.pathname)
    } 
  }, [])

  //Esta logica se puede utilizar en el componente link   
  function navigateTo(path){
    window.history.pushState({}, "", path)
    // popstate es un evento especial que nos indica que esta cambiando la url
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return {
    currentPath,
    navigateTo
  }

}
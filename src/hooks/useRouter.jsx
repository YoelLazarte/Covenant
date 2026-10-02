import { useNavigate, useLocation } from 'react-router';

export function useRouter(){
  const navigate = useNavigate();
  const location = useLocation();

  //Esta logica se puede utilizar en el componente link   
  function navigateTo(path){
    navigate(path)
  }

  return {
    currentPath: location.pathname,
    navigateTo
  }

}
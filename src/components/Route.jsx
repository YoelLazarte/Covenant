import { useRouter } from '../hooks/useRouter.jsx'

export function Route({ path, component: Component }){
 const { currentPath } = useRouter()

 if (currentPath !== path) return null

 return <Component/>
}


  // let page = <NotFoundPage/>
  // if(currentPath == "/"){
  //   page = <Home/> 
  // } else if(currentPath === "/search"){
  //   page = <Empleos/>
  // }



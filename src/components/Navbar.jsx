import { Link } from "./Links.jsx";

function Navbar(){
  return (
    <>
      <header>
        <h2>DevJob</h2>
        <nav>
          <Link href='/'>Inicio</Link>
          <Link href='/search'>Empleos</Link>
        </nav>

        <div>
          {/* <a href="#">Publicar un Empleo</a> */}
          {/* <a href="#">Iniciar sesion</a>  */}

          {/* <avatar-component
            service="github"
            username="YoelLazarte"
            size="32"
          ></avatar-component>
          <avatar-component
            service="google"
            username="google.com"
            size="32"
          ></avatar-component> */}
        </div>
      </header>
    </>
  );
}

export default Navbar
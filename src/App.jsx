import { Route } from './components/Route.jsx'

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
import { Home } from './pages/Home.jsx';
import { Empleos } from './pages/Empleos.jsx';
import { NotFoundPage } from './pages/404.jsx';


function App() {
  return (
    <>
    <Navbar/>
      <main>
        <Route path="/" component={Home}/>
        <Route path="/search" component={Empleos}/>
      </main>
    <Footer/>
    </>
  )
}

export default App

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
import { Empleos } from './pages/Empleos.jsx';



function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Empleos/>
    </main>

    <Footer/>
    </>
  )
}

export default App

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nosotros from "./pages/Nosotros"
import Menu from "./pages/Menu"
import Ubicacion from "./pages/Ubicacion"
import Header from "./Componentes/Header"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Nosotros/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/ubicacion" element={<Ubicacion/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App

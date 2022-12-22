import NavFirst from "./components/Nav/NavFirst";
import Banner from "./components/Banner/banner";
import AcercaMi from "./components/AcercaMi/AcercaMi";
import Photography from "./components/Photography/Photography";
import ProyectoList from "./components/Project/ProyectoList";
import ReferanciaList from "./components/Referencia/ReferenciaList";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="container-fluid">
      <NavFirst/>
      <Banner/>
      <Photography/>
      <AcercaMi/>
      <ProyectoList/>
      <ReferanciaList/>
      <Footer/>
    </div>
  )
}

export default App

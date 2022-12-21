import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import AcercaMi from "./components/AcercaMi/AcercaMi";
import Photography from "./components/Photography/Photography";
import ProyectoList from "./components/Project/ProyectoList";
import ReferanciaList from "./components/Referencia/ReferenciaList";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Banner/>
      <Photography/>
      <AcercaMi/>
      <ProyectoList/>
      <ReferanciaList/>
      
      hola mundo
    </div>
  )
}

export default App

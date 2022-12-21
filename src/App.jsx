import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import AcercaMi from "./components/AcercaMi/AcercaMi";
import Photography from "./components/Photography/Photography";
import ProyectoList from "./components/Project/ProyectoList";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Banner/>
      <Photography/>
      <AcercaMi/>
      <ProyectoList/>
      
      hola mundo
    </div>
  )
}

export default App

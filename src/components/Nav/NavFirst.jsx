import logo from "../../assets/logo-r.png"
import Btn from "../btn/Btn"
export default function NavFirst() {
    return (
        <nav className="navbar row d-flex justify-content-between navbar-expand-lg bg-light">
            <div className=" col-xxl-12  d-flex justify-content-between container-fluid">
                <a className="px-4 navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse" id="navbarNav">
                    <ul className=" d-flex justify-content-between navbar-nav">
                        <li className="col-xxl-2 nav-item d-flex justify-content-end align-self-center">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="col-xxl-2 nav-item d-flex justify-content-end align-self-center">
                            <a className="nav-link" href="#">Acerca de Mí</a>
                        </li>
                        <li className="col-xxl-2 nav-item d-flex justify-content-end align-self-center">
                            <a className="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="col-xxl-2 nav-item d-flex justify-content-end align-self-center" >
                            <a className="nav-link disabled">Contacto</a>
                        </li>
                        <li className="col-xxl-4 nav-item d-flex justify-content-end align-self-center">
                            <a className="nav-link disabled"><Btn option={"Hablemos"} link={"#/"} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
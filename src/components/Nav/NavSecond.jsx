import { useState } from "react";
import QuienSoy from "../AcercaMi/QuienSoy"
import HabilidadesList from "../AcercaMi/HabilidadList";
import EducacionList from "../AcercaMi/EducacionList";
import TecnologiaList from "../AcercaMi/TenologiaList";
import RedSocialList from "../AcercaMi/RedSocialList";

export default function NavSecond() {
    const [clickWho, setClickWho] = useState(false);
    const [clickSkill, setClickSkill] = useState(false);
    const [clickEducation, setClickEducation] = useState(false);
    const [clickTechnology, setClickTechnology] = useState(false);
    const [clickNetwork, setClickNetwork] = useState(false);
    function clicks(num) {
        console.log("entro");
        setClickWho(false);
        setClickSkill(false);
        setClickEducation(false);
        setClickTechnology(false);
        setClickNetwork(false);
        switch (num) {
            case 1:
                setClickWho(true);
                break;
            case 2:
                setClickSkill(true);
                break;
            case 3:
                setClickEducation(true);
                break;
            case 4:
                setClickTechnology(true);
                break;
            case 5:
                setClickNetwork(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <div className="row">
                <nav className="col-xxl-12 d-flex align-self-center navbar-expand-lg  div-nav-dos">
                    <ul className="container-fluid linea-nav  navbar-nav  d-flex justify-content-around">
                        <li className="nav-item" >
                            <a className="nav-link" onClick={() => {
                                console.log("entro")
                                clicks(1);
                            }
                            }>Quien Soy </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                clicks(2);
                            }
                            }>Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                clicks(3);
                            }
                            }>Educación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                clicks(4);
                            }
                            }>Tecnologias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => {
                                clicks(5);
                            }
                            }>Redes Sociales</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>

                {clickWho ? <QuienSoy /> : console.log("2" + clickWho)
                }
                {clickSkill ? <HabilidadesList /> : console.log("2" + clickSkill)
                }
                {clickEducation ? <EducacionList /> : console.log("2" + clickEducation)
                }
                {clickTechnology ? <TecnologiaList /> : console.log("2" + clickTechnology)
                }
                {clickNetwork ? <RedSocialList /> : console.log("2" + clickNetwork)
                }

            </div>
        </div>
    )
}
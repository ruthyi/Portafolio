import { useState } from "react"
import { Project } from "./project";
import Btn from "../btn/Btn";

export default function ProyectoList() {
    let cont = 0;
    const [listado, setListado] = useState([
        {
            id: "1",
            name: "Mario Random",
            url: "https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/Portafolio%2Fmario.png?alt=media&token=fbac3b3e-39a7-49eb-a5e5-ef297ed32f8c",
            description: "Sitio web que elimina concursantes al azar y el ultimo es el ganador, en donde Bowser sera el personaje encargado de eliminar y Mario de mostrar el ganador.",
            github: "https://manuperex.github.io/retoMarioRandom/"
        },
        {
            id: "2",
            name: "Calculadora",
            url: "https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/Portafolio%2Fcalculadora.png?alt=media&token=326dece9-64d7-4e20-a530-a6a9e3720c1f",
            description: "Calculadora con algunas operaciones aritmeticas",
            github: "https://ruthyi.github.io/calculadora/"
        },
        {
            id: "3",
            name: "Web Tributo",
            url: "https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/Portafolio%2FwillSmith.png?alt=media&token=695f1f00-8485-44a7-bacd-dc78bba51b8b",
            description: "Web Tributo que contiene información acerca de Will Smith",
            github: "https://ruthyi.github.io/WebTributo/"
        },
        {
            id: "4",
            name: "Reick and Morty",
            url: "https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/Portafolio%2Frick.png?alt=media&token=7fe59cc9-31fd-4e6f-8ff9-cd9310a86e8f",
            description: "Consumo de la ApiRest de rick and morty",
            github: "https://ruthyi.github.io/firstReactRick/"
        }
    ]);
    console.log(listado)
    return (
            <div className="row general">
                <h1 className="col-xxl-6 p-5 d-flex justify-content-end mis-projects">Mis Ultimos <br /> Proyectos</h1>
                {
                    listado.map((lista => {
                        console.log(lista)
                        cont++;
                        let valor = "p" + cont + " col-xxl-6 p-5 "
                        return (

                            <div className={valor} key={lista.id}>
                                <Project lista={lista} />
                            </div>
                        )
                    }))
                }
                <div className="col-xxl-6 d-flex justify-content-end px-5">
                   <Btn option={"Ver Más"} link={"https://github.com/ruthyi"}/>
                </div>
            </div>
       
    )
}
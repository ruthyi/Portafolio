import { useState } from "react"
import Referen from "./Referen";

export default function ReferanciaList(){
    const [people, setPeople] = useState([
        {
            id: "1",
            name: "Carlos Alberto Bermudez Arenas",
            cargo: "Docente de fisica  en el gimnasio Liceo Edad De Oro",
            linkeding: "https://www.linkedin.com/in/carlos-bermudez-arenas-87b961231/"
        },
        {
            id: "2",
            name: "Lida Mercedes Otalora",
            cargo: "Docente en el área de tecnología del Instituto Pedagógico Nacional .",
            linkeding: "https://www.linkedin.com/in/lida-otalora-8378ba25a/"
        },
        {
            id: "3",
            name: "Nathalia Garcia",
            cargo: "Ingeniera Industrial",
            linkeding: "www.linkedin.com/in/nathalia-garcía-cruz-524b42205"
        }
    ]);
    return(
            <div className="row div-refrencias p-5">
                <h1 className="col-xxl-12 d-flex justify-content-start mis-projects">Referencias Personales</h1>
                {
                    people.map((person => {
                        console.log(person)
                        return (
                            <div className="col-xxl-4 p-4 d-flex justify-content-center" key={person.id}>
                                <Referen person={person} />
                            </div>
                        )
                    }))
                }
            </div>
    )
}
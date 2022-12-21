import never from "../../assets/never.jpg"
export default function QuienSoy() {
    return (
        <div className="row div-quien d-flex justify-content-between p-5">
            <div className="col-xxl-7 quien-img">
                <img src={never} alt="never stop" />
            </div>
            <div className="col-xxl-5 d-flex align-self-center quien-p" >
                <p>Empecé mi trayectoria profesional como docente de tecnología, sin embargo en el camino me enamore de la programación.<br></br> <br></br>
                Actualmente, estudio Ingeniería de Sistemas, busco oportunidad para adquirir experiencia con programación en java, phyton, node.js o javascript y implementacion de framework django. Busco siempre trabajar en equipo de manera cooperativa y apoyando de la mejor manera posible, sintiendo una gran satisfacción con enseñar y aprender.</p>
            </div>
        </div>
    )
}
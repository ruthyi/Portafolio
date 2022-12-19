import logo from "../../assets/logo-r.png"
import NavFirst from "../Nav/navFirst"
import Btn from "../btn/Btn"

export default function Header(){
    return(
        <div className='row d-flex justify-content-between align-self-center  div-header'>
            <img className="col-xxl-1 logo" src={logo} alt="logo" />
            <NavFirst/>
            <Btn option={"Hablemos"}/>
        </div>
    )
}
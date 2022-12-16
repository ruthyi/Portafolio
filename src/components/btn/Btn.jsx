import './btn.css'

export default function Btn(props){
    return(
        <div className='div-btn'>
            <button>
            {props.option}
            </button>
        </div>
    )
}
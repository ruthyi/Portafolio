export default function Btn(props){
    return(
        <div className='col-xxl-2 div-btn d-flex align-self-center d-flex justify-content-end'>
            <button>
            {props.option}
            </button>
        </div>
    )
}
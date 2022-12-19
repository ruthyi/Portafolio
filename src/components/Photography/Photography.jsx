import photo from "../../assets/photo-r.png"
export default function Photography(){
    return(
        <div className="row d-flex justify-content-end px-5">
            <div className="col-xxl-2 div-photo">
                <img src={photo} alt="foto" />
            </div>
        </div>
    )
}
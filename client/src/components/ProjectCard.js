function ProjectCard(props){
    return (<>
    <div className="card" style={{width: "16%"}}>
    <img 
        src={props.src ? props.src : "..."} 
        className="card-img-top" 
        alt={props.alt ? props.alt : "Image Not Found"} 
        />
        <div className="card-body">
            <h5 className="card-title">{props.name ? props.name : "ERR: NAME NOT FOUND"}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{props.type ? props.type : "ERR: TYPE NOT FOUND"}</h6>
            {props.image ? <>
            </> : <></>}
            {/*<p className="card-text">{props.desc ? props.desc : "ERR: DESC NOT FOUND"}</p>*/}
            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
        </div>
    </div>
    </>)
}
export default ProjectCard;
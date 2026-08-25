function Card(props){
    return(
        <div className="card">

            <img className="card-image" src={props.img} ></img>
            <div className="card-details">

                <h3 style={{margin:"3px 0", fontSize:"18px", fontFamily:"monospace"}}>{props.cloth}</h3>
                <h3 style={{margin:"0px", fontSize:"25px", fontFamily:"math"}}>{props.offer}</h3>
                <h3 style={{margin:"0px", fontFamily:"emoji"}}>Price: {props.price}/-</h3>
                <h3 style={{margin:"0px",color:"yellow", fontFamily:"cursive"}}>Shop Now</h3>
            </div>
        </div>
    )
}

export default Card;
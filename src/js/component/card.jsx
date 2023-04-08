import React from "react";

const Card = (props) => {
    return (
    <div className = "col-sm">    
      <div className = "containerCard">  
            <div className="card" style={{width: "18em",margin: ".5em",zIndex: "-1"}}>
                <img className="card-img-top" src="http://bertsrentals.com/wp-content/uploads/2017/08/300x300-placeholder.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div> 
    </div>    
    )
}

export default Card;
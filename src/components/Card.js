import React from "react";



function Card({cardTitle1,cardTitle2,cardImage,cardAlt}){
    return(   
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-text">
                <p>{cardTitle1}<br/>{cardTitle2}</p>
            </div>
            <div className="card-img">
                <img src={process.env.PUBLIC_URL + `/img/${cardImage}`} alt={cardAlt}/>
            </div>
            </div>

        </div>
        
    )
}

export default Card;
import React from "react";
import ReactDom from "react-dom"    
import './css/experience.css'

function Experience([experiences]){
    return(
         <>
         <div className="allcards">
            {experiences.map(
                (exp,index) =>(
                    <div className="singlecard">
                <h1>{exp.title}</h1>
                <br>
                <p>
                    {exp.dis}
                </p>
                </br>

            </div>
                )
            )}
            
            

    </div>
    </>
         );
}
export default Experience;
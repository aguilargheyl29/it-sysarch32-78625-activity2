import React from "react";

function Student(props){
    const { name, email, picture } = props;
    return(
        <div class="card">
            <img class="image" src={picture} alt="profile" ></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        
    );
}
export default Student
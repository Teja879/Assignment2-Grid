import React from "react";

function FristPage(props) {

    console.log('props',props);
    return(
        <h1>I'M. from First page, My Name is {props.data.name}, My country is {props.countryDetails}</h1>
    ) 
};

export default FristPage;
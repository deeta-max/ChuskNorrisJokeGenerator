import React, { useState, useEffect } from "react";
import "./CategoryBox.css";

function CategoryBox(props){

    const [value, setValue] = useState("");

    function TypeValue(e){
        setValue(e.target.value);
        props.onChange(value);
    }  

    return(
        <div className="box-container">
            <button onClick={TypeValue} value={props.type}>{props.type}</button>
        </div>
    );
}

export default CategoryBox;
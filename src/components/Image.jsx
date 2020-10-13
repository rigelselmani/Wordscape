import React, { useState } from "react";

function ImageDisplay(props){
  
    const [newImage,setNewImage]=useState();

    fetch("https://pixabay.com/api/?key=11051593-a4e6d6adfc2d65d6b9612b399&q"+"&q="+props.addImg+"&")
    .then(response=> response.json())
    .then(jsonResponse =>{
      const image=jsonResponse.hits[0].largeImageURL;
      setNewImage(image)
    })

    return <div className="definition">
              <h2>Image • word</h2>
              <div className="space">
               <img src={newImage} alt="display-img"/>
              </div>
            </div>
}

export default ImageDisplay;
import React from "react";

function Save(){
    return <div className="definition">
             <p className="save-head">Characters remaining: 140</p>
             <textarea className="ownDefinition" rows="5" columns="20" maxLength="140" placeholder="Type the definition in your own words here or copy and paste from below. Limit 140 characters."></textarea>
             <button className="save-term" >Save to your Word &#8226; Bank</button>
            </div>
}

export default Save;
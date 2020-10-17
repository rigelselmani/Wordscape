import React,{useState} from "react";

function Search(props){
    const [word,setWord]=useState();
    
    function handleChange(event){
        const newValue=event.target.value;
        setWord(newValue)
    }

    function handleClick(event){
        props.onAdd(word);
        setWord("");
        event.preventDefault()
    }
    return <form>
              <input onChange={handleChange} type="text"  name="word"/>
              <button className="submit-button" onClick={handleClick}>Search</button>
           </form>
}

export default Search;
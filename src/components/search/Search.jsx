import React,{useState} from "react";

function Search(props){
    const [word,setWord]=useState({
        name:""
    });
    
    function handleChange(event){
        const newValue=event.target.value;
        setWord(newValue)
    }

    function handleClick(event){
        props.onAdd(word.name);
        setWord({name:""})
        event.preventDefault()
    }
    return <form>
              <input onChange={handleChange} type="text" placeholder="word"  name="word" value={word.name}/>
              <button onClick={handleClick}>Search</button>
           </form>
}

export default Search;
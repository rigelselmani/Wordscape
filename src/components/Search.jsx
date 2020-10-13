import React,{useState} from "react";

function Search(props){
    const [word,setWord]=useState();
    function handleChange(event){
        const newWord=event.target.value
        if(newWord===undefined){
            setWord("hello")
        }else{
            setWord(newWord)
        }
    }

    function handleClick(event){
        props.onAdd(word);
     
        event.preventDefault()
    }
    return <form>
              <input onChange={handleChange}type="text" placeholder="Search"/>
              <button onClick={handleClick}>Search</button>
           </form>
}

export default Search;
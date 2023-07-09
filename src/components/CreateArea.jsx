import React from "react";

function CreateArea(props) {

  const [inputText,updateText] = React.useState({
    title:"",
    content:""
  })
  function handleChange(event){
const {name,value}= event.target

updateText(prevValue=>{
  return {...prevValue,
  [name]:value}
})

  }
 function submitNote(event){
  props.onAdd(inputText)
  event.preventDefault();
  updateText({
    title:"",
    content:""
  })
 }
  return (
    <div>
      <form>
        <input value = {inputText.title} onChange = {handleChange} name="title" placeholder="Title" />
        <textarea value = {inputText.content} onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

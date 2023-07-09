import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [myNotes,updateNotes] = React.useState([])
  function addNote(note){
    updateNotes((prevNotes)=>{
      return[...prevNotes,note]
    })
  }
  function deleteNote(id){
    updateNotes((prevNotes)=>{
      return prevNotes.filter((theNote,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea  onAdd = {addNote} />
      {myNotes.map((noteItem,index)=>{return <Note onDelete={deleteNote} id = {index}key={index} title={noteItem.title} content={noteItem.content} />})}
      
      <Footer />
    </div>
  );
}

export default App;

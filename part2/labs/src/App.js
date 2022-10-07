import React, {useState} from "react";
import Note from "./components/Notes";

const App = ({notes}) => {
  // const { notes } = props
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true)

  const handlerSubmit = (event) => {
      event.preventDefault();
       console.log("newNote: ",newNote);
      const oneNote = {
        id: Math.random(),
        content: newNote,
        date: new Date(),
        important: true
      }
       setNotes([...note, oneNote])
  }

  const notesToShow = showAll ? note : note.filter(note => note.important === true)

  return (
    <div>
     <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {
          notesToShow.map((item, index) => {
              return(
                <Note key={index} note={item} />
                // <p key={index}> { item.content} </p>
              )
          })
        }
       
        
      </ul>

        <form onSubmit={handlerSubmit} >
            <input  onChange={(e) => setNewNote(e.target.value)}  value={newNote}/>
            <button  onClick={handlerSubmit} type="submit">save</button>
        </form>

    </div>
  )
}
export default App;

import React from 'react';

const Note = ({note}) => {
  return (
        <li>
            {/* <span>{note.date} </span>:   */}
            {note.content} <button>{note.important ? "Important" : "non important"}</button>
        </li>
  )
}

export default Note

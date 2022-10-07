import React from 'react';

const Note = ({note}) => {
  return (
        <li>
            <span>{note.date} </span>:  
            {note.content}
        </li>
  )
}

export default Note

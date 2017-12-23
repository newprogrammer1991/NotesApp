import React from 'react'
import Note from './Note'
const NoteList = (props) => {
    let items = props.notes.map( (note,i) => <li className="list-item" key={i}><Note note={note}/></li>)
    return (
        <ul className="list-items">
            {items}
        </ul>
    )
}

export default NoteList



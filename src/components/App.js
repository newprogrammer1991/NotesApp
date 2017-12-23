import React, {Component} from 'react'
import NoteForm from './NoteForm'
import Note from './Note'
import NoteList from './NoteList'
import '../css/style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
        this.addNote = this.addNote.bind(this);
    }

    addNote(properties) {
        this.setState({
            notes:this.state.notes.concat(properties)
        })
    }

    render() {
        return (
            <div className="main">
                <h2>NotesApp</h2>
                <NoteForm addNote={this.addNote} />
                <NoteList notes={this.state.notes}/>
            </div>
        )
    }
}
export default App

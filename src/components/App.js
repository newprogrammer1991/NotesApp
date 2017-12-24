import React, {Component} from 'react'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import '../css/style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
        this.addNote = this.addNote.bind(this);
    }

    componentDidUpdate() {
        let serialize = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', serialize);
    }

    componentDidMount() {
        let result = localStorage.getItem('notes');
        if (result && !this.state.notes.length) {
            this.setState({
                notes: JSON.parse(result)
            })
        }

    }

    addNote(properties) {
        this.setState({
            notes: this.state.notes.concat(properties)
        })
    }

    render() {
        return (
            <div className="main">
                <h2>NotesApp</h2>
                <NoteForm addNote={this.addNote}/>
                <NoteList notes={this.state.notes}/>
            </div>
        )
    }
}
export default App

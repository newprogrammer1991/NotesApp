import React, {Component} from 'react'
import Note from '../Note'
import './style.css'
import {CSSTransitionGroup} from 'react-transition-group'
class NoteList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        console.log('f')
    }

    render() {
        let items = this.props.notes.map((note, i) => <li className="list-item" key={i}><Note note={note}/></li>)
        return (
            <ul className="list-items">
                {items}
            </ul>
        )
    }
}
export default NoteList



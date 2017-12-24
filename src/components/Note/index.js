import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import './style.css'

const Note = (props) => {
    let {color, text} = props.note;
    let divStyle = {
        backgroundColor: color
    }

    return (
        <CSSTransitionGroup
            transitionName='note'
            transitionAppear
            transitionEnterTimeout={300}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={500}
        >
            <div style={divStyle}>
                {text}
            </div>
        </CSSTransitionGroup>

    )
}

export default Note



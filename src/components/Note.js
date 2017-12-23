import React from 'react'

const Note = (props) => {
    let {color, text} = props.note;
    let divStyle = {
        backgroundColor: color
    }

    return (
        <div style={divStyle}>
            {text}
        </div>
    )
}

export default Note



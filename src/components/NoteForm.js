import React, {Component} from 'react'
class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'white',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }



    handleChange(event) {
        let value = event.target.value;
        this.setState({
            color: value
        })
    };

    handleChangeText(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.text) {
            this.props.addNote(this.state);
        }
        this.setState({
            color: 'white',
            text: ''
        })
    }

    getClassName = type => this.state.color == type ? `color-${type} show` : `color-${type}`;

    render() {
        return (
            <div>
                <form className="main_form" onSubmit={this.handleSubmit}>
                    <textarea className="main_form-text" placeholder="Enter your note here" value={this.state.text}
                              onChange={this.handleChangeText}> </textarea>
                    <div className="main_form-manage">
                        <div className="main_form-radio">
                            <label className={this.getClassName('red')}>
                                <input name="color" type="radio" value='red'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                            <label className={this.getClassName('orange')}>
                                <input name="color" type="radio" value='orange'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                            <label className={this.getClassName('yellow')}>
                                <input name="color" type="radio" value='yellow'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                            <label className={this.getClassName('green')}>
                                <input name="color" type="radio" value='green'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                            <label className={this.getClassName('blue')}>
                                <input name="color" type="radio" value='blue'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                            <label className={this.getClassName('gold')}>
                                <input name="color" type="radio" value='gold'
                                       checked={this.state.color === this.value}
                                       onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="main_form-btn">
                            <input type="submit" value='Add'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    ;
}

export default NoteForm


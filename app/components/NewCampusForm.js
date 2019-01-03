import React from 'react'
import { connect } from 'react-redux'

import { sendCampus } from '../reducers/campuses'

class NewCampusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            imageUrl: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const inputValue = event.target.value;
        const stateField = event.target.name;
        this.setState({
            [stateField]: inputValue
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.sendCampus(this.state);
        this.setState({
            name: "",
            address: "",
            imageUrl: "",
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                </label>
                <input
                    type='text'
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <label>
                    Address:
                </label>
                <input
                    type='text'
                    name='address'
                    onChange={this.handleChange}
                    value={this.state.address}
                />

                <label>
                    Image link:
                </label>
                <input
                    type='text'
                    name='imageUrl'
                    onChange={this.handleChange}
                    value={this.state.imageUrl}
                />

                <label>
                    Description:
                </label>
                <input
                    type='text'
                    name='description'
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <button type="submit">Add</button>
            </form>
        )
    }
}

const mapDispatch = dispatch => ({
    sendCampus: campus => dispatch(sendCampus(campus))
})

export default connect(null, mapDispatch)(NewCampusForm)
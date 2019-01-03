import React from 'react';
import { connect } from 'react-redux'

import { updateCampusInTheDatabase } from '../reducers/campus'

export class UpdateCampusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.campus.name,
            address: this.props.campus.address,
            imageUrl: this.props.campus.imageUrl,
            description: this.props.campus.description
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
        this.props.updateCampusInTheDatabase(this.props.campus.id, this.state);
        this.setState({
            name: "",
            address: "",
            imageUrl: "",
            description: ""
        })
    }

    render() {
        return (
            <div>
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

                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        campus: state.campus,
    }
}

const mapDispatch = dispatch => ({
    updateCampusInTheDatabase: (id, campus) => {
        const thunk = updateCampusInTheDatabase(id, campus);
        dispatch(thunk);
    }
})

export default connect(mapStateToProps, mapDispatch)(UpdateCampusForm)
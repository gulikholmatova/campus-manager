import React from 'react';
import { connect } from 'react-redux'

import { updateStudentInTheDatabase } from '../reducers/student'

export class UpdateStudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            email: this.props.student.email,
            imageUrl: this.props.student.imageUrl,
            gpa: this.props.student.gpa
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
        this.props.updateStudentInTheDatabase(this.props.student.id, this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            imageUrl: "",
            gpa: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                </label>
                    <input
                        type='text'
                        name="firstNname"
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />

                    <label>
                        Last Name:
                </label>
                    <input
                        type='text'
                        name='lastName'
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    />

                    <label>
                        Email:
                </label>
                    <input
                        type='text'
                        name='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                    />

                    <label>
                        Picture link:
                </label>
                    <input
                        type='text'
                        name='imageUrl'
                        onChange={this.handleChange}
                        value={this.state.imageUrl}
                    />

                    <label>
                        GPA:
                </label>
                    <input
                        type='text'
                        name='gpa'
                        onChange={this.handleChange}
                        value={this.state.gpa}
                    />

                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        student: state.student,
    }
}

const mapDispatch = dispatch => ({
    updateStudentInTheDatabase: (id, student) => {
        const thunk = updateStudentInTheDatabase(id, student);
        dispatch(thunk);
    }
})

export default connect(mapStateToProps, mapDispatch)(UpdateStudentForm)
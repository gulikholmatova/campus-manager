import React from 'react'
import { connect } from 'react-redux'

import { sendStudent } from '../reducers/students'

class NewStudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const imageUrl = event.target.imageUrl.value || null;
        const gpa = event.target.gpa.value || null;

        this.props.sendStudent({
            firstName,
            lastName,
            email,
            imageUrl,
            gpa
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First name:
                </label>
                <input type='text' name="firstName" />

                <label>
                    Last name:
                </label>
                <input type='text' name='lastName' />

                <label>
                    Image link:
                </label>
                <input type='text' name='imageUrl' />

                <label>
                    GPA:
                </label>
                <input type='text' name='gpa' />

                <label>
                    Email:
                </label>
                <input type='text' name='email' />

                <button type="submit">Done</button>
            </form>
        )
    }
}

const mapDispatch = dispatch => ({
    sendStudent: student => dispatch(sendStudent(student))
})

export default connect(null, mapDispatch)(NewStudentForm)
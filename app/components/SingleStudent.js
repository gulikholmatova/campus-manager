import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UpdateStudentForm from './UpdateStudentForm';

import { fetchStudent } from '../reducers/student';

export class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = Number(this.props.match.params.studentId);
    this.props.fetchStudent(id);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }
  render() {
    console.log(this.props);

    const {
      id,
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
      campus,
    } = this.props.student;

    return (
      <div className="list">
        <h3>Student Information:</h3>
        <button type="button" onClick={this.handleClick}>
          Update information
        </button>
        {this.state.active && <UpdateStudentForm />}
        {id && (
          <ul>
            <li>
              Full name: {firstName} {lastName}
            </li>
            <li>Email: {email}</li>
            <li>
              Image: <img src={imageUrl} />
            </li>
            <li>GPA: {gpa}</li>
            <li>
              Campus:{' '}
              {campus ? (
                <Link to={`campuses/${campus.id}`}>{campus.name}</Link>
              ) : (
                'This student is not associated with any campuse in the database'
              )}
            </li>
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    student: state.student,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudent: id => {
      const thunk = fetchStudent(id);
      dispatch(thunk);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);

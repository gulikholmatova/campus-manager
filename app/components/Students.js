import React from 'react';
import { fetchStudents, deleteStudentFromServer } from '../reducers/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NewStudentForm from './NewStudentForm';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      active: !this.state.active,
    });
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const students = this.props.students;

    return (
      <div className="list">
        <h3>The list of students:</h3>
        <button type="button" onClick={this.handleClick}>
          Add a new student
        </button>
        {this.state.active && <NewStudentForm />}
        <table>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>
                  <button
                    type="text"
                    onClick={() => {
                      this.props.deleteStudentFromServer(student.id);
                    }}
                  >
                    X
                  </button>
                </td>

                <td>
                  <Link to={`students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </td>

                <td>
                  <img src={student.imageUrl} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.students.students,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudents: () => {
      const thunk = fetchStudents();
      dispatch(thunk);
    },
    deleteStudentFromServer: id => {
      const thunk = deleteStudentFromServer(id);
      dispatch(thunk);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);

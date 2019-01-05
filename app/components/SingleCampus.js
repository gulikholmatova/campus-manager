import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UpdateCampusForm from './UpdateCampusForm';

import { fetchCampus } from '../reducers/campus';

export class SingleCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const id = Number(this.props.match.params.campusId);
    this.props.fetchCampus(id);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const campus = this.props.campus;
    const { name, imageUrl, address, description, students } = campus;

    return (
      <div className="list">
        <h3>Campus Information:</h3>
        <button type="button" onClick={this.handleClick}>
          Update information
        </button>
        {this.state.active && <UpdateCampusForm />}
        {campus && (
          <ul>
            <li>Campus name: {name} </li>
            <li>
              Campus image: <img src={imageUrl} />{' '}
            </li>
            <li>Campus address: {address} </li>
            <li>Campus description: {description} </li>
            <li>
              Students on this campus:{' '}
              {students ? (
                <ol>
                  {students.map(student => {
                    return (
                      <li key={student.id}>
                        <Link to={`/students/${student.id}`}>
                          {' '}
                          {student.firstName} {student.lastName}{' '}
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                'Currently no students study at this campus.'
              )}
            </li>
          </ul>
        )}
      </div>
    );
  }
}

// Connecting to redux store:

function mapStateToProps(state) {
  return {
    campus: state.campus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCampus: id => {
      const thunk = fetchCampus(id);
      dispatch(thunk);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);

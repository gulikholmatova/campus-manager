import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampusFromServer } from '../reducers/campuses';
import { connect } from 'react-redux';

import NewCampusForm from './NewCampusForm';

class Campuses extends React.Component {
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
    this.props.fetchCampuses();
  }

  render() {
    const campuses = this.props.campuses || [];

    return (
      <div className="list">
        <h3>List of campuses:</h3>
        <button type="button" onClick={this.handleClick}>
          Add a new campus
        </button>
        {this.state.active && <NewCampusForm />}
        <table>
          <tbody>
            {campuses.map(campus => (
              <tr key={campus.id}>
                <td>
                  <button
                    type="submit"
                    onClick={() => {
                      this.props.deleteCampusFromServer(campus.id);
                    }}
                  >
                    X
                  </button>
                </td>
                <td>
                  <Link to={`campuses/${campus.id}`} key={campus.id}>
                    {campus.name}
                  </Link>
                </td>
                <td>
                  <img src={campus.imageUrl} />
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
    campuses: state.campuses.campuses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCampuses: () => {
      const thunk = fetchCampuses();
      dispatch(thunk);
    },
    deleteCampusFromServer: id => {
      const thunk = deleteCampusFromServer(id);
      dispatch(thunk);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);

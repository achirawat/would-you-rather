import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="question panel panel-primary col-lg-5">
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(mapStateToProps)(LeaderBoard);
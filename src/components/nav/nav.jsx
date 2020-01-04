import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let links = this.props.links;
    return ( 
      <Fragment>
        <ul className='nav-outer-container'>
          {
            links.map((link, index) => {
              return <li className="nav-link" key={index}>{link}</li>
            })
          }
        </ul>
      </Fragment> 
    );
  }
}

Nav.propTypes = {
  position: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Nav;
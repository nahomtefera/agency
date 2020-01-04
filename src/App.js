import React, {Component, Fragment} from 'react';
import './App.css';

// Components
import Nav from './components/nav/nav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Nav position="fixed" links={['home', 'about us', 'location', 'contact']}></Nav>
      </Fragment>
     );
  }
}
 
export default App;

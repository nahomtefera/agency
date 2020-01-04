import React, {Component, Fragment} from 'react';
import './App.css';

// Components
import Nav from './components/nav/nav'
import Menu from './components/menu/menu'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Nav position="fixed" links={['home', 'about us', 'location', 'contact']}/>
        <Menu />
      </Fragment>
     );
  }
}
 
export default App;

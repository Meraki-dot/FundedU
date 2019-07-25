import React from 'react';
import Nav from './components/Nav';
import CallToAction from './components/cta'
import { Switch, Route } from 'react-router-dom'
import Student from './components/student'
import Funder from './components/funder'


const App = () => {
  return (
    <div className="App">
      <div className="">
        <Nav />
      </div>
      <div className="">
        <Switch>
          <Route exact path='/' render={(renderProps) => <CallToAction {...renderProps} />} />
          <Route exact path='/student' render={(renderProps) => <Student {...renderProps} />}/>
          <Route exact path='/funder' render={(renderProps) => <Funder {...renderProps} />}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
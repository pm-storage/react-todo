import React from 'react';
import '../scss/App.scss';
import Nav from './Nav';
import LandingPage from './LandingPage';
import { Switch, Route } from "react-router-dom";

import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {toDos: []}
  }

  componentDidMount() {
    let API_URL = process.env.REACT_APP_API_URL
    
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({toDos: data})
    })
  }


  render() {
    let items = this.state.toDos;
    let sortTodos = items.filter(item => item.status);
    let sortTodones = items.filter(item => !item.status);

    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/todos'>
              <ToDosContainer data={sortTodos}/>
              <ToDonesContainer data={sortTodones}/>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

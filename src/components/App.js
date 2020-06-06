import React from 'react';
import '../scss/App.scss';
import { Switch, Route } from "react-router-dom";
import Nav from './Nav';
import LandingPage from './LandingPage';
import Form from './Form';


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
  handleNewTodo = (todo) => {
    fetch('https://ds-todo-api.now.sh/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(todoNew => {
      let newItems = [...this.state.toDos, todoNew];
      this.setState({toDos: newItems});
    })
    .catch(err => console.log(err))
  }

  updateTodos = (id) => {

    let item;
    const newItems = this.state.toDos.map((el) => {
      if(el._id === id) {
        el.status = !el.status;
        item = el;
      }
      return el;
    })
    fetch(`https://ds-todo-api.now.sh/todos/${item._id}`, {
      method: 'PUT',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        status: item.status,
      }),
    })
    .then((res) => res.json())
    .then((todoUpdated) => {
      console.log('todo updated')
      this.setState({
        items: newItems
      });
    });
  };

  render() {
    let items = this.state.toDos;
    let sortTodos = items.filter(item => !item.status);
    let sortTodones = items.filter(item => item.status);

    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/todos'>
              <Form addTodo={this.handleNewTodo}/>
             <ToDosContainer data={sortTodos} callGrandpa={this.updateTodos}/>
              <ToDonesContainer data={sortTodones} callGrandma={this.updateTodos}/>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

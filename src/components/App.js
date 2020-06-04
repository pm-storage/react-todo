import React from 'react';
import '../scss/App.scss';
import Nav from './Nav';

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
          <ToDosContainer data={sortTodos}/>
          <ToDonesContainer data={sortTodones}/>
        </main>
      </div>
    );
  }
}

export default App;

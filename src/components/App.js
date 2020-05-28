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
    let arrayOfTodos = [
      {
        status:false,
        name: 'trow trash',
        _id: 1
      },
      {
        status:false,
        name: 'wash dishes',
        _id: 2
      },
      {
        status:false,
        name: 'wash face',
        _id: 3
      }, 
      {
        status:true,
        name: 'by bread',
        _id: 4
      },
      {
        status:true,
        name: 'by water',
        _id: 5
      },
      {
        status:true,
        name: 'by fanta',
        _id: 6
      }
    ]
    this.setState({toDos: arrayOfTodos})
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

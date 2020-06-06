import React from 'react';

class ToDoForm extends React.Component {
constructor(props) {
  super(props)
  this.state = {todo: ''};
}

handleChange = (e) => {
  let button = document.querySelector('#submit');


  this.setState({todo: e.target.value})
};

handleSubmit = (e) => {
  e.preventDefault();
  let button = document.querySelector('#submit');

  let newTodo = {
    status:false,
    text: this.state.todo,
    data: new Date()
  };

  this.setState({todo: ''});
  button.disabled = true;
  this.props.addTodo(newTodo);

}

  render() {
    return(
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          <input name="todo" value={this.state.todo} onChange={this.handleChange} type="text"/>
        </label>
        <input id='submit' type="submit" value="Submit" />
      </form>
    )
  }
}

export default ToDoForm;
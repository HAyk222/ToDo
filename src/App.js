import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ToDoes from './components/ToDoes';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todo: [],
      todoValue: "",
      todoUpdatedValue: ""
    }

    this.addToDo = this.addToDo.bind(this)
    this.updateToDo = this.updateToDo.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.openInput = this.openInput.bind(this)
    this.blur = this.blur.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
  }

  // hovering mouse on ToDo
  handleMouseEnter(key){
    const todo = this.state.todo;
    const obj = todo[key];
    obj.hover = true;
    todo.splice(key,1,obj);
    this.setState({ todo })
  }

  // leaving mouse on ToDo
  handleMouseLeave(key){
    const todo = this.state.todo;
    const obj = todo[key];
    obj.hover = false;
    todo.splice(key,1,obj);
    this.setState({ todo })
  }

  // click pencil for open input
  openInput(key,value){
    const todo = this.state.todo;
    const obj = todo[key];
    obj.hover = false;
    obj.edit = true;
    todo.splice(key,1,obj);
    this.setState({ todo, todoUpdatedValue : value })
  }

  // delete edit input and create text when blur mouse on input
  blur(key, event){
    if( event.relatedTarget && event.relatedTarget.defaultValue === "Update" ) {
      return
    } 
    const todo = this.state.todo;
    const obj = todo[key];
    obj.hover = false;
    obj.edit = false;
    todo.splice(key,1,obj);
    if(this.state.changeInputValue !== ""){
      this.setState({ todo })
    }
  }

  // changing ToDo Status
  changeStatus(key){
    const todo = this.state.todo;
    const obj = todo[key];
    obj.status = (obj.status === "new") ? "done" : "new"
    todo.splice(key,1,obj);
    this.setState({ todo })
  }

  // changing todoValue && todoUpdatedValue
  changeInputValue( value, inputValue ){ this.setState({ [inputValue] : value  }) }

  // adding new ToDo
  addToDo(event){
    event.preventDefault();
    if( this.state.todoValue === "" ){ return }
    this.setState({ 
      todo: [...this.state.todo, { value: this.state.todoValue, status: "new", hover: false, edit: false }], 
      todoValue : "" 
    })
  }

  // updating ToDo
  updateToDo(event, key){
    event.preventDefault();
    if( this.state.todoUpdatedValue === "" ){ return }
    const todo = this.state.todo;
    const obj = todo[key];
    obj.value = this.state.todoUpdatedValue;
    obj.edit=false;
    obj.hover=true;
    todo.splice(key,1,obj);
    this.setState({ todo, todoUpdatedValue : "" })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-content">
          <Header 
            count={this.state.todo.length} />
          <label className="saveLabel">
            <Form 
              value="Create" 
              index=""
              inputValue={this.state.todoValue}
              stateProp="todoValue"
              changeInputValue={this.changeInputValue}
              rmBlur={this.rmBlur}
              submit={this.addToDo} />
          </label>
          <ToDoes 
            todoList={this.state.todo} 
            updateToDo={this.updateToDo} 
            openInput={this.openInput} 
            blur={this.blur}
            changeStatus={this.changeStatus}
            inputValue={this.state.todoUpdatedValue}
            stateProp="todoUpdatedValue"
            changeInputValue={this.changeInputValue}
            handleMouseEnter={this.handleMouseEnter} 
            handleMouseLeave={this.handleMouseLeave} />
        </div>
      </div>
    );
  }
}

export default App;

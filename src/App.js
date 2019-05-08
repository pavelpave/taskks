import React, { Component } from 'react';
import Table from './ui/index'
import api from './ui/api_Task/'
import dispath from './state/rerender'
const apiTodo = api.todo


class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.state
    this.axioTaskList = this.axioTaskList.bind(this)
    this.renderArrTask = this.renderArrTask.bind(this)
    this.setStateMy = this.setStateMy.bind(this)
    this.rerenderThree = props.rerenderThree
  }
  setStateMy(prevState , newState){
    console.log('chek');
    debugger
    // this.setState(prevState = newState)
    this.setState((prevState, newState) => ({
      prevState: newState
    }));
  }
  axioTaskList() {
    apiTodo.getTasks({}, response => {
      let mass = []
      let data = response.data;     
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].owner_object.id === this.state.owner_object.id) {
          mass.push(data.results[i])
        }
        // this.state.buttonCliked[this.data.results[i].id] = null

      }
      this.setState(this.state.opisTask= data.results)
    })

  }
  renderArrTask(data) {
  
    let newstate = {...this.state};
    let opisTask = newstate.opisTask;

    // data.map(newtask => {
    //   opisTask = opisTask.map(oldtask => {
    //     if (newtask.id === oldtask.id) {
    //       // console.log(oldtask, 'oldtask')
    //       // console.log(newtask, 'newtask')
    //       opisTask = oldtask
    //       debugger
    //       // return { ...newtask };
    //     }
    //     // return oldtask;
    //   })
    // });
    let mass = data.map((newTasks) =>{
      
      opisTask.map((oldTasks) => { 
        if(oldTasks.id === newTasks.id){
            // console.log( opisTask );
            debugger
            opisTask = newTasks
           return {...opisTask}  
        }
     
      })
      
    })
    // console.log(data);
  
    this.setStateMy(this.state.opisTask , mass);
    
  }

  componentDidMount() {
    this.axioTaskList()
  }
  render() {

    return (
      <Table state={this.state} rerenderTask={this.renderArrTask} />
    )
  }
}

export default App;

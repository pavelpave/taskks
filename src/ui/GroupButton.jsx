import React, { Component } from 'react'
import './styles/style.css'
import api from './api_Task/'
import state from '../state/state'
const apiTodo = api.todo

class GroupButton extends Component {
    constructor(props) {
        super(props);
        this.clickBurg = this.clickBurg.bind(this)
        this.funClickClose = this.funClickClose.bind(this)
        this.funClickFinishTask = this.funClickFinishTask.bind(this)
        this.funClickStopTask = this.funClickStopTask.bind(this)
        this.funClickOpenTask = this.funClickOpenTask.bind(this)
        this.funClickReopenTask = this.funClickReopenTask.bind(this)
        this.state = state
        this.rerenderTask = props.rerenderTask
        this.el = props.el
    }
    clickBurg(e) {

        let elem = e.target.getAttribute('data')
        if (this.state.buttonCliked[elem]) {

            this.state.buttonCliked[elem] = false
        } else {

            this.state.buttonCliked[elem] = true
        }

        console.log(this.state);
        return this.setState(this.state)

    }

    funClickClose() {
      apiTodo.setTaskClose(this.el.id, response => {
        console.log(response, 'response');
        this.rerenderTask(response.data)
    })
    }
    funClickStopTask() {
      apiTodo.setTaskStop(this.el.id, response => {
        console.log(response, 'response');
        this.rerenderTask(response.data)
    })
       
    }
    funClickOpenTask() {
        apiTodo.setTaskStart(this.el.id, response => {
            console.log(response, 'response');
            this.rerenderTask(response.data)
    
       
         
        })
        
    }
    funClickFinishTask() {
      apiTodo.setTaskFinish(this.el.id, response => {
        console.log(response, 'response');
        // this.rerenderTask(response.data)
    })
    }
    funClickReopenTask() {
      apiTodo.setTaskReopen(this.el.id, response => {
        console.log(response, 'response');
        // this.rerenderTask(response.data.results)
        this.setState(this.state.opisTask = response.data.results)
    })
    }
  
    render() {

        return (
            <div>
                <button className='btn btn-primary' onClick={this.funClickOpenTask}>Взять задачу</button>

                <div className="Burger_button" data={this.el.id} onClick={this.clickBurg}>

                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div >
                    {this.state.buttonCliked[this.el.id] ? (
                        <div className='clickedBurger'>
                            {this.el.can_close ? (
                                <button type="button" className='btn btn-danger' onClick={this.funClickClose}>Закрыть задачу</button>
                            ) : <></>}
                            {this.el.can_finish ? (
                                <button type="button" className='btn btn-success' onClick={this.funClickFinishTask}>Выполненно</button>
                            ) : <></>}
                            {this.el.can_reopen ? (
                                <button type="button" className='btn btn-dark' onClick={this.funClickReopenTask}>Переоткрыть задачу</button>
                            ) : <></>}
                            {this.el.can_stop_develop ? (
                                <button className='btn-warning' onClick={this.funClickStopTask}>Остановить</button>) : <></>}
                        </div>) : <></>}
                </div>


                <a href="#" className="link_task">перейти</a>
            </div>
        )
    }
}
export default GroupButton
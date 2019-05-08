import React , {Component} from 'react';
import TableHead from './TableHead'
import Tbody from './Tbody'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'


class Table extends Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.rerenderTask = props.rerenderTask
    }
    render(){
 
        
        return(
            <table className="table ">
                <TableHead />
                <Tbody state={this.state} rerenderTask={this.rerenderTask}/>     
            </table>
        )
    }
}
export default Table
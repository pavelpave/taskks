import React , {Component} from 'react';
import TrTable from './TrTable'
// import state from '../state/state'


class Tbody extends Component{
  constructor(props) {
    super(props);
    this.state = props.state
    this.rerenderTask = props.rerenderTask
    
  }
  
    render(){
      
        return(
              <tbody>
                
                  <TrTable state={this.state} rerenderTask={ this.rerenderTask}/>               
                
            </tbody>
        )
    }
}
export default Tbody
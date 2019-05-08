import React , {Component} from 'react'
import FlagWork from './FlagWork'
import GroupButton from './GroupButton'
import OpisTask from './OpisTask'
import Podrob from './Podrob'
// import state from '../state/state'
import './styles/style.css'
class TrTable extends Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.trRenderTable = this.trRenderTable.bind(this)
        this.rerenderTask = props.rerenderTask
    }
    
    trRenderTable(){
       
        return  this.state.opisTask.map((el,i) =>{
            
            return(
                <tr className='row_style' key={i}>
                <th scope="row">{el.id}</th>
                <td >
                    <FlagWork el={el} state={this.state} />
                </td>
                <td>
                    <GroupButton el={el} state={ this.state} rerenderTask={this.rerenderTask}/>
                </td>
                <td>
                    <OpisTask el={el} state={ this.state}/>
                </td>
                 {this.state.opis ? <Podrob />: <td></td>}
            </tr>
            )
        })
        
    }
    render(){
       
        return(
            <>
            
                 { this.trRenderTable() }        
            </>
        )
    }
}
export default TrTable
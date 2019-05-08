import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class FlagWork extends Component {
    constructor(props){
        super(props)
        this.el = props.el
        this.state = props.state
        this.classNameDiv = this.classNameDiv.bind(this)
        this.textDiv = this.textDiv.bind(this)
    }
    classNameDiv(){
        if(this.el.state_verbose  === "Выполняется"){
            return 'btn  btn-outline-warning'
        }else if(this.el.state_verbose  === "Открыта для выполнения"){
            return 'btn btn-outline-primary'
        }else if(this.el.state_verbose  === "На проверке"){
            return 'btn btn-outline-info'
        }
    }
    textDiv(){
        for (const key in this.state.opisTask) {
            if (this.state.opisTask[key].id ===this.el.id) {
             
                return this.el.state_verbose
            }
        }
    }
    render(){
        // debugger
        return(
            <div >
                    <p className={this.classNameDiv()}>{this.textDiv()}</p>
                    <p className="Name_organiz">   Аэрофлот и так далее</p>
                    
            </div>
        )
    }
}
export default FlagWork
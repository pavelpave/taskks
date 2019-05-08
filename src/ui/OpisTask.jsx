import React , {Component} from 'react'
import moment from 'moment'
class OpisTask extends Component {
    constructor(props){
        super(props)
        this.el = props.el
        this.state = props.state
        this.cklicked = this.cklicked.bind(this)
        this.contentOpisText = this.contentdataText.bind(this)
        this.clikedFun = props.clikedFun
    }

    cklicked(){
       
        if(this.state.opis){
        this.state.opis = false
        }else{
            this.state.opis = true   
        }
        this.setState(this.state)
    }
    contentdataText(){
        return(
             moment(this.el.created_at).format('MMMM Do YYYY, h:mm:ss a')
        )
    }
  render(){
//    if(this.el.contractor_object.first_name === null){
//     this.el.contractor_object.first_name = ''
//    }
//    if(this.el.contractor_object.last_name === null){
//     this.el.contractor_object.last_name = ''
//    }
   return(
       <div className="container_opis_task" onClick={this.cklicked}>
           <span title='Затраченное / Планируемое время' className='time_work'> {this.el.spent_hours} ч./ {this.el.estimate_hours} ч.</span>
           <span>
               <strong>{this.el.title}</strong>
               
               <p className="data_created">{this.contentdataText()}</p>
               <p className='task_table__contractor'>Исполнитель: {this.el.contractor_object.first_name} {this.el.contractor_object.last_name}</p>
               
               <div className="contentClikedBlock">
                    {this.state.opis ?  <div contentEditable='true' dangerouslySetInnerHTML={{ __html: this.el.content }}></div>  : <p></p>}
               </div>
           </span>
       </div>
   )
    }
}
export default OpisTask
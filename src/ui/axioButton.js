import * as axios from 'axios';
import React, { Component } from 'react'
// import state from '../state/state'
const urlBase = 'http://garpixcms.staging.garpix.com/garpix_workflow/api/v1/';


export default class axioPost extends Component {
  constructor(el, urlProps, state) {
    super(el, urlProps, state)
    this.state = state
    this.el = el
    this.urlProps = urlProps
    this.axioRequests = this.axioRequests.bind(this)
  }
  axioRequests() {
    console.log(this.setState);

    const headers = {
      'Authorization': 'Token 6668b8cfdf927ba7710a9b0890de66c12d0b69fa'
    }
    axios.post(`${urlBase}task/${this.el}${this.urlProps}`, {}, { headers })
      .then((response) => {
        console.log(this.setState);
        let newstate = {...this.state};
        console.log(response.data)
        response.data.map(newtask => {
          newstate.opisTask.map(oldtask => {
            if(newtask.id === oldtask.id) {
              return newtask;
            }
            return oldtask
          })
        });
   
        this.setState(newstate);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
      </>
    )
  }
}
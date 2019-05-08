
// can_close: false///////////
// can_edit: false
// can_finish: false////////////
// can_open: false////////////
// can_reopen: false//////////
// can_set_estimate: true
// can_start_develop: false/////////
// can_stop_develop: false////////
// export let rerender = (callBack) => {
//     callBack()
// }




const  state = {
     opisTask:[],
    owner_object:{
        "id": 37,
        "first_name": "Алексей",
        "last_name": "Кузнецов",
        "is_idler": false
    }, 
    contractor_object: {
        "id": 37,
        "first_name": "Алексей",
        "last_name": "Кузнецов",
        "is_idler": false
    },
   
    opis:false,
    buttonCliked:{},
    rerenderTaskList:null,

}

export default  state
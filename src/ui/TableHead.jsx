import React , {Component} from 'react';

class TableHead extends Component{
    render(){
        return(
            <thead className="table-bordered"> 
            <tr>
                <th scope="col">#</th>
                <th scope="col">Статус</th>
                <th scope="col">Действие</th>
                <th scope="col">Описание</th>
            </tr>
        </thead>
        )
    }
}
export default TableHead
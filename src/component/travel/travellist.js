import React from "react"
import reactDom from "react-dom"
import AppTravel from "../table/appTableTravel"
import TravelComplete from "../travel/travelComplete"

class TravelList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            todolist:[{title:'TVM',status:true},{title:'Bangalore',status:false}]
            
            
        }
        
    }
    
    onDelete=(index)=>{
        let updatedtodo = this.state.todolist;
        updatedtodo.splice(index,1)

        this.setState(({ todolist: updatedtodo }))
    }
    setData = (event) => {
        this.setState({ title: event.target.value})
    }
    saveData = () => {
        const todolist ={
            title: this.state.title,
            status: false
        }
        this.setState((prevState) => ({ todolist: [...prevState.todolist, todolist ] , title: ''}))

    }
    render() {
        return (
            <div>
                <div className="card">
                <div className="search-bar">
                <input type="text" value={this.state.title} onChange={this.setData}/>
                <div>
                       <input type="button" className="savebutton" value="save" onClick={this.saveData} />
                      </div>
                </div>
                      <AppTravel todolist={this.state.todolist} onDelete={this.onDelete}/>
                </div>
               
              
            </div>

        )
    }
}

export default TravelList
import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:""}
    }
    
    uservalue=(event)=>{
        this.setState({username:event.target.value})
    }
    submit=(event)=>{
        event.preventDefault()
        alert("Name is",this.state.username)
    }
    render(){
        return <>
                <form onSubmit={this.submit}>
                    <h1>Hello {this.state.username}</h1>
                    <input type='text' onChange={this.uservalue}/>
                    <input type="submit"/>
                </form>

               </>      
    }
}
export default Form
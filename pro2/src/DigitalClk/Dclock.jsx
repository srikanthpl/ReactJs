import React,{Component} from 'react'

class Dclock extends Component{

    constructor(props){
        super(props)
        this.state={
            time:null
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)
    }
   render(){
        return(
            <>
            <h1>Digital Clock</h1>
            <h1>{this.state.time}</h1>
            </>
        )
    }
    
}
export default Dclock
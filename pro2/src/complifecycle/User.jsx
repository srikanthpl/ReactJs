import React,{Component,Fragment} from 'react'
import Axios from 'axios'

class User extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch()
    }

    render(){
       return <>
        {/* <pre>{JSON.Stringify(this.state.users)}</pre> */}
        {
            this.state.users.length>0?<>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user,index)=>{
                            return <>
                            <tr key={index}>
                                
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                            </>
                        })
                    }
                </tbody>
                </table>
                </>:<h3>No Data</h3>
        }
        </>
}
}
export default User
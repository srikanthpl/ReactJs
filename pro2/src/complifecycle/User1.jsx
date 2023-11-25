import React,{Component} from 'react'
import Axios from 'axios'

class User1 extends Component{
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({
                datas:resp.data
            })
        })
        .catch()
    }

    render(){
        return(
            <>
                {this.state.datas.length>0?<>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.datas.map((data)=>{
                            return <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
                </>:<h3>No Data</h3>
                }
            </>
        )
    }
}
export default User1
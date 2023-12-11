import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

const CreatePro = () => {
  
    let [product,setProduct]=useState({name:'',price:"",image:"",qty:'',info:""})
    let navigate = useNavigate()
    let [submited,setSubmited]=useState(false)

    let updateHandler=(event)=>{
        setProduct({
            ...product,[event.target.name]:event.target.value
        })
    }

    let imageHandler=(event)=>{
        let imagefile=event.target.files[0]
        /* setProduct({
            ...product,image:imagefile
        }) */
        let reader=new FileReader()
        reader.readAsDataURL(imagefile)
        reader.addEventListener("load",()=>{
            if(reader.value){
                setProduct({
                    ...product,image:reader.value
                })
            }
            else{
                console.log("Unable to Convert")
            }
        }) 

    }
    let submitHandler=(event)=>{
        event.preventDefault()
        Axios.post('http://127.0.0.1:8080/api/products',product)
        .then(()=>{})
        .catch(()=>{})
        setSubmited(true)
    }

    return (
    <div className='container'>
  
    <pre>{JSON.stringify(product)}</pre>
    {
    submited ?navigate("/admin")  : <>
        <div className="row">
    
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h3>New Project</h3>
            </div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                 <input  className='form-control' placeholder='Product Name' type='text' name="name"  onChange={updateHandler}/>
              </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Price' type='text' name="price"  onChange={updateHandler}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Image' type='file' name="image"  onChange={imageHandler}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='Info' type='text' name="info"  onChange={updateHandler}/>
           </div>
           <div className='form-group'>
              <input className='form-control' placeholder='QTY' type='text' name="qty"  onChange={updateHandler}/>
           </div>
          
            <input type='submit' value="upload" className='btn btn-success'/> 
          </form>
          </div>
        </div>
      </div>
    </div>
          
         
    </>

    }
   
  </div>
  )
}

export default CreatePro
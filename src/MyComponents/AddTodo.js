import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    
    const submit=()=>{
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{
            props.addTodo(title,desc)
        }
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Content</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" onClick={submit} className="btn btn-success mx-3">Submit</button>
                <hr/>
            </form>
        </div>
    )
}

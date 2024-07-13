import { useState } from "react"

const Todo =()=>{
      const [input, setInput] = useState("")
      const [items, setItems] = useState([]);
      const additem = ()=>{
        if(input===""){
            alert("Please enter a value")
            return
        }
        setItems([...items, input])
        setInput("")
      }

    return(
        <div className="mt-5">
        <h1 className="text-center fs-1 fw-bold">Todo App</h1>
        {/* Todo Form */}
        <form>
            <div className="mb-3" style={{display:"flex"}}>
                {/* <label className="form-label">Add Todo</label> */}
                <input value={input} type="text" className="form-control w-50 m-auto fs-4" id="todoInput" onChange={(e)=>setInput(e.target.value)} placeholder="Enter todo..."/>
            <button type="submit" className="form-control w-25 m-auto bg-success fw-bold fs-4 text-light" onClick={additem}>Add Todo</button>
            </div>
        </form>
        {
            items.map((e, index)=>(
                <li key={index} className="mb-2 fs-4 text-center">{e}</li>
            ))
              
        }
        </div>

    )
}
export default Todo
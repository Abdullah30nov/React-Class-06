import { useState } from "react"


const Login = ()=>{
      let [Submit, setSubmit] = useState(true)
      let [Name, setName] = useState(true)
      let [Email, setEmail] = useState(true)
      let [Password, setPassword] = useState(true)

      const handleSubmit = (e)=>{
            e.preventDefault()
            setSubmit(false)
      }
    return(
        <>
        <h1>Login</h1>
        <form action="">
            <label htmlFor="">UserName: </label><br />
            <input type="name" placeholder="Enter your name"/><br /><br /><br />
            <label htmlFor="">Email: </label><br />
            <input type="email" placeholder="Enter your Email"/><br /><br /><br />
            <label htmlFor="">Password: </label><br />
            <input type="password" placeholder="Enter your Password"/><br /><br /><br />
            <label htmlFor="">Confirm Password: </label><br />
            <input type="password" placeholder="Enter your Confirm Password"/><br /><br /><br />

            <button>Submit</button>
        </form>
        </>
    )
}
export default Login
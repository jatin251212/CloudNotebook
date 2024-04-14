import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password: "" })
    let navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch('https://cloudnotebook-1.onrender.com/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password })

          });
          const json=await response.json();
          console.log(json);
          if(json.success===true){
            //Save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/");
            props.showAlert("Login successfully","success")
          }
          else{
            props.showAlert("Invalid Details","danger")
          }

    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className=''>Login Here</h2>
  <div className="form-group my-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
  </div>
  
  <button type="submit" className="btn btn-primary my-3" >Submit</button>
</form>
  )
}

export default Login

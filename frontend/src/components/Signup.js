import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'



const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"",email:"", password: "",cpassword: "" })
    let navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch('https://cloudnotebook-1.onrender.com/api/auth/createuser', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body: JSON.stringify({name:name,email:email,password:password })

          });
          const json=await response.json();
          console.log(json);
          
            //Save the auth token and redirect
            if(json.success){
              localStorage.setItem('token',json.authToken);
              navigate("/");
              props.showAlert("Account created successfully","success")

            }
            else{
                props.showAlert("Invalid Credentials","danger")
            }
            
         
          

    }


  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})

  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit} >
      <h2>Create Your Account here</h2>
  <div className="form-group my-3">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange}   />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}  />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required   />
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required   />
  </div>
  
  <button type="submit" className="btn btn-primary my-3" >Submit</button>
</form>
    </div>
  )
}

export default Signup

import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
      
    const loginUser = async (e) =>{

        e.preventDefault();

        try{
          
          const response = await axios.post(
              "https://mkart-frontend.herokuapp.com/api/v1/auth/login",
              {
                  username,
                  password
              }
          );

          if(response.data.success){
              localStorage.setItem("accessToken",response.data.token);
              navigate("/")
          }

        }catch(error){
            console.log(error);
        }

    }



    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center' style={{ height: "90vh" }}>
                <div className='col-5'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='card-title'>Login</h5>
                        </div>
                        <div className='card-body'>

                            <form onSubmit={loginUser}>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='form-control mb-3'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <input
                                    type="password"
                                    placeholder='password'
                                    className='form-control mb-3'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                                <button className='btn btn-primary '>Login</button>


                            </form>



                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}


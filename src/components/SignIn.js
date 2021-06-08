import {useState} from 'react'
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';
                                          



const SignINContent = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    

    const signInFunction = async () => {
        return await fetch(`${BASE}/users/login`,{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password
            })
          }).then(response => response.json())
            .then(({token}) => {
                if (token) {
                    localStorage.setItem("token", JSON.stringify(token))
                    window.location.href = "/routines";
                } else {
                    alert('Invalid Username or Password')
                }
            
            })
            .catch(console.error);
        } 

        const onSubmit = (event) => {
            event.preventDefault()
            signInFunction()   
        }
	return (
        <div style={{marginTop: '100px'}}>
            <header>
                <h1 style={{color: 'white'}}>Sign In</h1>
            </header>
            <form onSubmit={onSubmit} >
                <label style={{color: 'white'}}>Username
                <input type='Username' onInput={(event) => {setUsername(event.target.value)}}></input>
                </label>
                <br></br>
                <br></br>
                <label style={{color: 'white'}}>Password   
                <input type='Password' onInput={(event) => {setPassword(event.target.value)}}></input>
                </label>
                <br></br>
                <button type='submit' style={{marginLeft: '170px', marginTop: '10px'}}>Submit</button>
            </form>

        </div>
		
	)
}

export default SignINContent
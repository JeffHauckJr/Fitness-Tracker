import {useEffect ,useState} from 'react'
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
        <div>
            <header>
                <h1>Sign In</h1>
            </header>
            <form onSubmit={onSubmit} >
                <label>Username
                <input type='Username' onInput={(event) => {setUsername(event.target.value)}}></input>
                </label>
                <br></br>
                <br></br>
                <label>Password   
                <input type='Password' onInput={(event) => {setPassword(event.target.value)}}></input>
                </label>
                <br></br>
                <button type='submit'>Submit</button>
            </form>

        </div>
		
	)
}

export default SignINContent
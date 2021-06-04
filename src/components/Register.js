import {useEffect ,useState} from 'react'
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';
                                          



const RegisterContent = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    

    const registerFunction = async () => {
        return await fetch(`${BASE}/users/register`,{
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
                    window.location.href = "/home";
                } else {
                    alert('Username or Password Already in Use. Try Again')
                }
            
            })
            .catch(console.error);
        } 

        const onSubmit = (event) => {
            event.preventDefault()
            registerFunction()   
        }
	return (
        <div>
            <header>
                <h1>Register</h1>
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

export default RegisterContent
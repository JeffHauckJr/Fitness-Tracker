const RegisterFunction = async () => {
    //if else creates and stores token for new info if info matches another token throw Alert message
}

const RegistrationContent = () => {
	return (
		<div>
            <header>
                <h1>Register</h1>
            </header>
            <main>
                <p>Username</p>
                <input type='text'></input>
                <p>Password</p>
                <input type='text'></input>
                <br></br>
                <button onClick={<RegisterFunction />}>Submit</button>

            </main>
        </div>
	)
}

export default RegistrationContent
const SignInFunction = () => {
    //If else check for same credentials if match store token if not throw alert message

}


const SignINContent = () => {
	return (
        <div>
            <header>
                <h1>Sign In</h1>
            </header>
            <main>
                <p>Username</p>
                <input type='text'></input>
                <p>Password</p>
                <input type='text'></input>
                <br></br>
                <button onClick={<SignInFunction />}>Submit</button>
            
            </main>

        </div>
		
	)
}

export default SignINContent
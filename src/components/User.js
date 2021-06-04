import { Link } from "react-router-dom";
import {AppBar, Toolbar} from '@material-ui/core'
import {
	SIGNIN,
    REGISTER
} from "../constants";

const User = () => {
    return (
        <div id="footer">
			<AppBar position="absolute" >
				<h1>I am user</h1>
			<Toolbar>
				<Link to={SIGNIN} style={{textDecoration: "none"}}>Sign In</Link>
				<Link to={REGISTER} style={{textDecoration: "none"}}>Register</Link>
			</Toolbar>
		</AppBar>
		</div>
			
		
    )
}

export default User
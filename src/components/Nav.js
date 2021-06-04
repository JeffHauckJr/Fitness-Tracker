import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
	ACTIVITIES_ROUTE,
	HOME_ROUTE,
	MY_ROUTINES_ROUTE,
	ROUTINES_ROUTE,
	SIGNIN,
	REGISTER
} from "../constants";

const Navigation = () => {
	return (
		<>
		<AppBar >
			<Toolbar>
				<Link to={HOME_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'white'}}>Home</Link>
				<Link to={ROUTINES_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'white'}}>Routines</Link>
				<Link to={MY_ROUTINES_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'white'}}>My Routines</Link>
				<Link to={ACTIVITIES_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'white'}}>Activities</Link>
				<Link to={SIGNIN} style={{textDecoration: "none", marginLeft: '55%', fontSize: '25px', color: 'white'}}>Sign In</Link>
				<Link to={REGISTER} style={{textDecoration: "none", fontSize: '25px', marginLeft: '50px', color: 'white'}}>Register</Link>
			</Toolbar>
		</AppBar>
		</>
	);
};

export default Navigation;
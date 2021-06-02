import { Route } from "react-router-dom";
import {
	ACTIVITIES_ROUTE,
	HOME_ROUTE,
	ROUTINES_ROUTE,
	MY_ROUTINES_ROUTE,
	SIGNIN,
	REGISTER,
} from "../constants";

import  HomeContent  from './Home'
import  ActivitiesContent  from './Activities'
import  RoutineContent  from './Routines'
import  MyRoutineContent  from './MyRoutines'
import  SignINContent  from './SignIn'
import  RegistrationContent  from './Register'

const Pages = () => {
	return (
		<>
			<Route path={HOME_ROUTE}>
				<HomeContent />
			</Route>
			<Route path={ROUTINES_ROUTE}>
				<RoutineContent />
			</Route>
			<Route path={MY_ROUTINES_ROUTE}>
				<MyRoutineContent />
			</Route>
			<Route path={ACTIVITIES_ROUTE}>
				<ActivitiesContent />
			</Route>
			<Route path={SIGNIN}>
				<SignINContent />
			</Route>
			<Route path={REGISTER}>
				<RegistrationContent />
			</Route>
		</>
	);
};

export default Pages;
import { Route } from "react-router-dom";
import {
	ACTIVITIES_ROUTE,
	HOME_ROUTE,
	ROUTINES_ROUTE,
	MY_ROUTINES_ROUTE,
	SIGNIN,
	REGISTER,
	CREATEROUTINE,
} from "../constants";

import  HomeContent  from './Home'
import  ActivitiesContent  from './Activities'
import  Routines  from './Routines'
import  MyRoutineCard  from './MyRoutines'
import  SignINContent  from './SignIn'
import  RegisterContent  from './Register'
import  CreateRoutineContent from "./CreateRoutine";


const Pages = (props) => {
	const {routines, setRoutines} = props
	const {activities, setActivities} = props
	return (
		<>
			<Route path={HOME_ROUTE}>
				<HomeContent />
			</Route>
			<Route path={ROUTINES_ROUTE}>
				<Routines
				routines={routines}
				setRoutines={setRoutines}
				/>
			</Route>
			<Route path={MY_ROUTINES_ROUTE}>
				<MyRoutineCard />
			</Route>
			<Route path={ACTIVITIES_ROUTE}>
				<ActivitiesContent 
				activities={activities}
				setActivities={setActivities}
				/>
			</Route>
			<Route path={SIGNIN}>
				<SignINContent />
			</Route>
			<Route path={REGISTER}>
				<RegisterContent />
			</Route>
			<Route path={CREATEROUTINE}> 
				<CreateRoutineContent />
			</Route>
		</>
	);
};

export default Pages;
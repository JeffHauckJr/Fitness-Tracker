import React, {useEffect} from 'react'
import { getRoutines } from '../api'

const Routines = ({ routines, setRoutines }) => {
	useEffect(() => {
	  getRoutines()
		.then((routine) => {
		  setRoutines(routine);
		})
		.catch((error) => {
			console.error(error)
		});
	});
	return (
	  <>
		<div className="page-head">
		  <h1>Routines</h1>
		</div>
		<div id="routines-container">
		  {routines.map(
			({
			  id,
			  creatorId,
			  isPublic,
			  name,
			  goal,
			  creatorName,
			  activities,
			}) => (
			  <div key={id} className="routine-cards">
				<div className="routine-card">
				  <div className="card-name">
					Routine Name:<p>{name}</p>
				  </div>
				  <div className="card-goal">
					Goal:<p>{goal}</p>
				  </div>
				</div>
			  </div>
			)
		  )}
		</div>
	  </>
	);
  };



export default Routines
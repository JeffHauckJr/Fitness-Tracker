import {useEffect} from 'react'
import { getActivities } from "../api";
import CreateActivityContent from './CreateActivity';


const ActivitiesContent = ({activities, setActivities}) => {
	useEffect(() => {
		getActivities()
		  .then((activities) => {
			setActivities(activities);
		  })
		  .catch((error) => {
			  console.error(error)
		  });
	  }, [setActivities]);
	return (
		<>
		<div>
			<CreateActivityContent />
		</div>
		<div className="page-head">
		  
		</div>
		
		<div id="routines-container">
		  {activities.map(
			({
			  id,
			  name,
			  description
			}) => (
			  <div key={id} className="routine-cards">
				<div className="routine-card">
				  <div className="card-name">
					<b>Name:</b><p>{name}</p>
				  </div>
				  <div className="card-description">
					<b>Description:</b><p>{description}</p>
				  </div>
				</div>
			  </div>
			)
		  )}
		</div>
	  </>
	)
}

export default ActivitiesContent
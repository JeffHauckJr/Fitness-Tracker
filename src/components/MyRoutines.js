import { useState, useEffect } from "react";
import axios from 'axios'
import CreateRoutineContent from "./CreateRoutine";
import RoutineRow from './RoutineRows'
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';

const myUsernameFetch = (myToken) => {
	try {
		return axios
			.get(`${BASE}/users/me`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${myToken}`,
				},
			})
			.then(({ data: { username } }) => {
				return username;
			});
	} catch (err) {
		console.error(err);
	}
};

const myRoutinesFetch = (username, myToken) => {
	try {
		return axios
			.get(
				`${BASE}/users/${username}/routines`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${myToken}`,
					},
				}
			)
			.then(({ data }) => {
				return data;
			});
	} catch (err) {
		console.error(err);
	}
};

 const MyRoutineContent = () => {
  let myUsername;
	const [myRoutines, setMyRoutines] = useState([]);

    useEffect(async () => {
      const myToken = JSON.parse(localStorage.getItem("token"));
      if (myToken) {
        myUsername = await myUsernameFetch(myToken);
        const routines = await myRoutinesFetch(myUsername ,myToken);
        setMyRoutines(routines);
      }
    }, []);
  
    const onRemoveRoutine = (index) => {
      const copy = [...myRoutines];
      copy.splice(index, 1);
      setMyRoutines(copy);
    };


  return (
    <div>
      <div> 
        <CreateRoutineContent />
      </div>
        {myRoutines.map((routine, index) => {
            return (
              <RoutineRow
								key={routine.id}
								routine={routine}
								onRemoveRoutine={() => {
									onRemoveRoutine(index);
								}}
							/>
            )
        })}
    </div>
  );
};
export default MyRoutineContent;
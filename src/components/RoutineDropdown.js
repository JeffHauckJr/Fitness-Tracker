import { useState, useEffect } from "react";
import { getActivities } from "../api";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";


const AddActivityToRoutine = () => {
  const [activitiesList, setActivitiesList] = useState([]);
  const [activity, setActivity] = useState("");
  useEffect(() => {
    getActivities()
      .then((activitiesList) => {
        setActivitiesList(activitiesList);
        console.log(activitiesList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setActivitiesList]);
  return (
    <fieldset>
      <label htmlFor="select-century">Activity </label>
      <select
        name="century"
        id="select-century"
        value={activity}
        onChange={(event) => {
          setActivity(event.target.value);
        }}
      >
        {activitiesList.map((activity) => (
          <option key={`${activity.id}+${activity.name}`} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default AddActivityToRoutine;

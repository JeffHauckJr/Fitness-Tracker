import React, { useEffect } from "react";
import { getRoutines } from "../api";
import "./routines.css";

const Routines = ({ routines, setRoutines }) => {
  useEffect(() => {
    getRoutines()
      .then((routine) => {
        setRoutines(routine);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <div className="page-head">
        <h1>Routines</h1>
      </div>
      <div id="routines-container">
        {routines.map((routine) => (
          <div key={routine.id} className="routine-cards">
            {createRoutineHTML(routine)}
          </div>
        ))}
      </div>
    </>
  );
};
const createRoutineHTML = (routine) => {
  return (
    <div className="routine-card">
      <div className="card-name">
        <b>Routine:</b><p>{routine.name}</p>
      </div>
      <div className="card-creator">
        <b>Creator:</b> <p>{routine.creatorName}</p>
      </div>
      <div className="card-count">
        <b>Count:</b> <p>{routine.count}</p>
      </div>
      <div className="card-duration">
        <b>Duration:</b> <p>{routine.duration}</p>
      </div>
      <div className="card-goal">
        <b>Goal:</b><p>{routine.goal}</p>
        <div className="card-activity">
          <b>Activity:</b>
          {routine.activities.map(
            ({
              id,
              name,
              description,
              duration,
              count,
              routineActivityId,
              routineId,
            }) => (
              <p key={id}>{name}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Routines;
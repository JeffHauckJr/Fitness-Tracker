import React, { useState, useEffect } from "react";
import { getActivities } from "../api";
import  AddActivityToRoutine  from './RoutineDropdown'
import {
  Create as CreateIcon,
  Save as SaveIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import "./RoutineRows.css";
import { ROUTINES_ROUTE } from "../constants";


const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const RoutineRow = ({
  routine: { id, name, goal, creatorName, isPublic },
  onRemoveRoutine,
}) => {
  const myToken = JSON.parse(localStorage.getItem("token"));
  const [routineName, setRoutineName] = useState(name);
  const [routineGoal, setRoutineGoal] = useState(goal);
  const [editMode, setEditMode] = useState(false);


  const onEdit = () => {
    setEditMode(true);
  };

  const onSave = (id) => {
    setEditMode(false);
    fetch(`${BASE}/${ROUTINES_ROUTE}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
      body: JSON.stringify({
        name: routineName,
        goal: routineGoal,
      }),
    })
      .then((response) => response.json())
      .then((result) => {})
      .catch(console.error);
  };

  const onDelete = (id) => {
    onRemoveRoutine();
    fetch(`${BASE}/${ROUTINES_ROUTE}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  return (
    <div
      className="my-routine-card-container"
      style={{ backgroundColor: "silver", marginBottom: "30px" }}
    >
      <div key={id}>
        <div>Username: {creatorName}</div>
        <div>
          {editMode ? (
            <>
              <label>Name:</label>
              <input
                value={routineName}
                onChange={(event) => {
                  setRoutineName(event.target.value);
                }}
              />
            </>
          ) : (
            <>
              <label>Name:</label>
              {routineName}
            </>
          )}
        </div>
        <div>
          {editMode ? (
            <>
              <label>Goal:</label>
              <input
                value={routineGoal}
                onChange={(event) => {
                  setRoutineGoal(event.target.value);
                }}
              />
            </>
          ) : (
            <>
              <label>goal:</label>
              {routineGoal}
            </>
          )}
        </div>
        <div>
          {editMode ? (
            <SaveIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                onSave(id);
              }}
            />
          ) : (
            <CreateIcon style={{ cursor: "pointer" }} onClick={onEdit} />
          )}
        </div>
        <div>
          <DeleteIcon
            onClick={() => {
              onDelete(id);
            }}
          />
        </div>
            <AddActivityToRoutine />
      </div>
    </div>
  );
};

export default RoutineRow;

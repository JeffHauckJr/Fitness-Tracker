import { useState } from "react";
import { CREATEROUTINE } from "../constants";
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';
 
const CreateRoutineContent = () => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const createRoutine = async () => {
    const myToken = JSON.parse(localStorage.getItem('token'))
    return await fetch(`${BASE}/routines`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${myToken}`},
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };
  const onSubmit = (event) => {
    event.preventDefault();
	  setIsPublic(true)
    createRoutine();
  };
  return (
    <div>
      <header>
        <h1>Create Routines</h1>
      </header>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="Name"
            onInput={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label>
          Goal:
          <input
            type="Goal"
            onInput={(event) => {
              setGoal(event.target.value);
            }}
          ></input>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <div id=""></div>
    </div>
  );
};

export default CreateRoutineContent
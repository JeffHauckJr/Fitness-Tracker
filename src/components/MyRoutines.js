import { useState, useEffect } from "react";
import { getMyRoutines } from "../api";
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';


 
const MyRoutineContent = () => {
  
  const MyRoutineCard = async () => {
  const [id, setId] = useState()
  const [username, setUsername] = useState()

  useEffect(() => {
    getMyRoutines()
      .then(() => {
        setId(id)
      })
      .then(() => {
        setUsername(username)
      })
      .catch((error) => {
        console.error(error)
      })
  })
} 
  return (
    <div>
      <button onClick={() => { window.location.href = "/create-routines"}} type={'submit'} onSubmit={(event) => {event.preventDefault();}}>Create Routines</button>
    </div>
  );
};

export default MyRoutineContent;

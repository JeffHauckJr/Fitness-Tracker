import axios from 'axios'

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api';


export async function getRoutines() {
    try {
      const { data } = await axios.get(`${ BASE }/routines`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  export async function getActivities() {
      try {
          const {data} = await axios.get(`${ BASE }/activities`)
          return data
      } catch (error) {
          throw error
      }
  }

  export async function getMyRoutines() {
    const myToken = JSON.parse(localStorage.getItem('token'))
    return await fetch(`${BASE}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${myToken}`
      },
    }).then(response => response.json())
      .then(({id, username}) => {
        console.log(id, username)
      })
      .catch(console.error)
  }
  

export async function registerUser(username, password) {
  try {
    const {data} = await axios.get(`${ BASE }/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    return data
  } catch (error) {
        console.error(error)
  }
}
export async function signInUser(username, password) {
  try {
    const {data} = await axios.get(`${BASE}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }) 
    return data
  } catch (error) {
    console.error(error)
  } 
}
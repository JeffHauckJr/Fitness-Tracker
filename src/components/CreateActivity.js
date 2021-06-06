import {useState} from 'react'
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'

const CreateActivityContent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const createActivity = async () => {
      const myToken = JSON.parse(localStorage.getItem('token'))
      return await fetch(`${BASE}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${myToken}`},
        body: JSON.stringify({
          name: name,
          description: description
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch(alert('This is a duplicate activity'));
    };
    const onSubmit = (event) => {
      event.preventDefault();
      createActivity();
    };
    const myToken = JSON.parse(localStorage.getItem('token'))
    if (myToken) {
        return (
            <div>
              <header>
                <h1>Create Activity</h1>
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
                      setDescription(event.target.value);
                    }}
                  ></input>
                </label>
                <br></br>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
    } else {
        return null
    }
  };
  export default CreateActivityContent
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Login from './Login'

function App() {


  // State vars
  const [newMessage, setNewMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])

  useEffect(()=>{
    axios
    // .get('http://localhost:7777/')
    .get('https://chat2back.herokuapp.com/')
        .then((response)=>{
            setAllMessages(response.data);
        })
  }, []);

  const newMessageChange = (event) =>{
    newMessageChange(event.target.value);
  };

  const newMessageSubmit = (event) =>{
      event.preventDefault();
      axios.post(
          'https://chat2back.herokuapp.com/',
          {
              message: newMessage
          }
      ).then(()=>{
          axios
              .get('https://chat2back.herokuapp.com/')
              .then((response)=>{
                  setAllMessages(response.data);
              });
      });
  };

  return (
    <div>
      {/* {id} */}
      {/* <Login onIdSubmit={setId}/> */}
      <h1 className="">nani</h1>

      <form onSubmit={newMessageSubmit}>
        New Message: <input  type="text" onChange={newMessageChange}/><br/>
        <input class="button-primary" type="submit" value="Submit"/>
      </form>

      <br/><br/>
      <h2>Messages</h2>

      <ul>
      {
        allMessages.map((message)=>{
          return(
            <li>
              <h5>"{message.message}"</h5>
            </li>
          )
        })
      }
      </ul>

    </div>
  );
}

export default App;

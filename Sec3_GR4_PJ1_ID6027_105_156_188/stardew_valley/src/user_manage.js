import React, { useState } from 'react';
import axios from 'axios';
import './info.css'; 

function User()  {


    const [User_ID, setUser_ID] = useState(0);
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Birthdate, setBirthdate] = useState(new Date());
    const [User_mail, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [updateFirstname, setupdateFirstname] = useState("");
    const [updateLastname, setupdateLastname] = useState("");
    const [updateBirthdate, setupdateBirthdate] = useState(new Date());
    const [updateUser_mail, setupdateEmail] = useState("");
    const [updatePassword, setupdatePassword] = useState("");

    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //get CRUD services from search.js
    const getUser = () => {
        axios.get('http://localhost:5000/user_info').then((res) => {
            setUserList(res.data);
        });
    }

    const addUser = () => {
      axios.post("http://localhost:5000/creates", {
        User_ID: User_ID,
        Firstname: Firstname,
        Lastname: Lastname,
        Birthdate: Birthdate,
        User_mail: User_mail,
        Password: Password,
      }).then(() => {
        setUserList([
          ...userList,
          {
            User_ID: User_ID,
            Firstname: Firstname,
            Lastname: Lastname,
            Birthdate: Birthdate,
            User_mail: User_mail,
            Password: Password,
          },
        ]);
      });
    };

    const updateUser = (User_ID) => {
      axios.put("http://localhost:5000/updates", { 
        Firstname: updateFirstname,
        Lastname: updateLastname,
        Birthdate: updateBirthdate,
        User_mail: updateUser_mail,
        Password: updatePassword,
        User_ID: User_ID
      }).then(
        (res) => {
          setUserList(
            userList.map((val) => {
              return val.User_ID === User_ID
                ? {
                    User_ID: val.User_ID,
                    Firstname: updateFirstname,
                    Lastname: updateLastname,
                    Birthdate: updateBirthdate,
                    User_mail: updateUser_mail,
                    Password: updatePassword,
                  }
                : val;
            })
          );
        }
      );
    };

    const deleteUser = (User_ID) => {
      axios.delete(`http://localhost:5000/deletes/${User_ID}`).then((res) => {
        setUserList(
          userList.filter((val) => {
            return val.User_ID !== User_ID;
          })
        );
      });
    };

    return (
        <div class="infbody">

          <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>
          
          <h2 style={{ color: 'white' }}>Search for user</h2>

          <input type = "text" placeholder="Search from name..." onChange={(event) =>{
            setSearchTerm(event.target.value);
          }}
          />
          <h2 style={{ color: 'white' }}>Insert user</h2>
          <div className="User">
            <form action="">

              <div className="mb-3">
                <label className="form-label" htmlFor="User_ID" style={{ color: 'white' }}>ID:</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => { setUser_ID(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="Firstname" style={{ color: 'white' }}>Firstname:</label>
                <input type="text" className="form-control" placeholder="Enter firstname" onChange={(event) => { setFirstname(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="Lastname" style={{ color: 'white' }}>Lastname:</label>
                <input type="text" className="form-control" placeholder="Enter lastname" onChange={(event) => { setLastname(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="Birthdate" style={{ color: 'white' }}>Birthdate:</label>
                <input type="text" className="form-control" placeholder="Enter birthdate" onChange={(event) => { setBirthdate(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="User_mail" style={{ color: 'white' }}>Email:</label>
                <input type="text" className="form-control" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="Password" style={{ color: 'white' }}>Password:</label>
                <input type="text" className="form-control" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value)}}/>
              </div><br/>

              <button class="button2" onClick={addUser}>
                Add Info
              </button>
            </form>
          </div><br/>
          <h1></h1><br/>
          <div className="Users">
            <button class="button1"  onClick={getUser}>
              Show Info
            </button>

            <br />
            <br />

            {userList.filter((val) => {
              if(searchTerm ==="") {
                return val
              } else if (val.Firstname.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
              return (
                <div class="container">
                <div class="column">
                <div className="card">
                  <div className="card-body text-left" key={key}>
                    <p className="card-text">Firstname: {val.Firstname}</p><br/>
                    <p className="card-text">Lastname: {val.Lastname}</p><br/>
                    <p className="card-text">Birthdate: {val.Birthdate}</p><br/>
                    <p className="card-text">Email: {val.User_mail}</p><br/>
                    <p className="card-text">Password: {val.Password}</p><br/>
                </div>
                </div><br/><br/>
                
                    <div className="d-flex">
                
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Firstname" style={{ color: 'white' }}>Firstname:</label>
                        <input type="text" className="form-control" placeholder="Enter firstname" onChange={(event) => { setupdateFirstname(event.target.value)}}/>
                        </div><br/>
                      
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Lastname" style={{ color: 'white' }}>Lastname:</label>
                        <input type="text" className="form-control" placeholder="Enter lastname" onChange={(event) => { setupdateLastname(event.target.value)}}/>
                      </div><br/>
                      
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Birthdate" style={{ color: 'white' }}>Birthdate:</label>
                        <input type="text" className="form-control" placeholder="Enter birthdate" onChange={(event) => { setupdateBirthdate(event.target.value)}}/>
                      </div><br/>
                      
                      <div className="mb-3">
                        <label className="form-label" htmlFor="User_mail" style={{ color: 'white' }}>Email:</label>
                        <input type="text" className="form-control" placeholder="Enter email" onChange={(event) => { setupdateEmail(event.target.value)}}/>
                      </div><br/>
                      
                      <div className="mb-3">
                        <label className="form-label" htmlFor="Password" style={{ color: 'white' }}>Password:</label>
                        <input type="text" className="form-control" placeholder="Enter password" onChange={(event) => { setupdatePassword(event.target.value)}}/>
                      </div><br/><br/>

                      <button class="button1" onClick={() => {updateUser(val.User_ID)}}>Update Info</button>
                      <button class="button3" onClick={() => {deleteUser(val.User_ID)}}>Delete Info</button>
                    </div><br/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
}

export default User;
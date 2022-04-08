import React, { useState } from 'react';
import axios from 'axios';
import './info.css'; 

function Product() {
    const [NPC_ID, setNPC_ID] = useState(0);
    const [NPC_name, setName] = useState("");
    const [NPC_season, setSeason] = useState("");
    const [NPC_bd, setBD] = useState(0);
    const [NPC_home, setHome] = useState("");
    const [NPC_gender, setGender] = useState("");
    const [NPC_status, setStatus] = useState("");

    const [updateNPC_name, setupdateName] = useState("");
    const [updateNPC_season, setupdateSeason] = useState("");
    const [updateNPC_bd, setupdateBD] = useState(0);
    const [updateNPC_home, setupdateHome] = useState("");
    const [updateNPC_gender, setupdateGender] = useState("");
    const [updateNPC_status, setupdateStatus] = useState("");
    
    const [infoList, setInfoList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); //filter by name
    
    //get CRUD services from search.js
    const getInfo = () => {   
      axios.get('http://localhost:5000/information').then((res) => {
        setInfoList(res.data);
      });
    }

    const addInfo = () => {
      axios.post("http://localhost:5000/create", {
        NPC_ID: NPC_ID,
        NPC_name: NPC_name,
        NPC_season: NPC_season,
        NPC_bd: NPC_bd,
        NPC_home: NPC_home,
        NPC_gender: NPC_gender,
        NPC_status: NPC_status,
      }).then(() => {
        setInfoList([
          ...infoList,
          {
            NPC_ID: NPC_ID,
            NPC_name: NPC_name,
            NPC_season: NPC_season,
            NPC_bd: NPC_bd,
            NPC_home: NPC_home,
            NPC_gender: NPC_gender,
            NPC_status: NPC_status,
          },
        ]);
      });
    };

    const updateInfo = (NPC_ID) => {
      axios.put("http://localhost:5000/update", { 
        NPC_name: updateNPC_name,
        NPC_season: updateNPC_season,
        NPC_bd: updateNPC_bd,
        NPC_home: updateNPC_home,
        NPC_gender: updateNPC_gender,
        NPC_status: updateNPC_status,
        NPC_ID: NPC_ID
      }).then(
        (res) => {
          setInfoList(
            infoList.map((val) => {
              return val.NPC_ID === NPC_ID
                ? {
                    NPC_ID: val.NPC_ID,
                    NPC_name: updateNPC_name,
                    NPC_season: updateNPC_season,
                    NPC_bd: updateNPC_bd,
                    NPC_home: updateNPC_home,
                    NPC_gender: updateNPC_gender,
                    NPC_status: updateNPC_status,
                  }
                : val;
            })
          );
        }
      );
    };

    const deleteInfo = (NPC_ID) => {
      axios.delete(`http://localhost:5000/delete/${NPC_ID}`).then((res) => {
        setInfoList(
          infoList.filter((val) => {
            return val.NPC_ID !== NPC_ID;
          })
        );
      });
    };
    
    return (
        <div class="infbody">

          <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/11170746/fdfa47d494b75bd5979742522aa4a07babb7a6cf.png" height="170" class="center"></img>

          <h2 style={{ color: 'white' }}>Search for information</h2>
          <input type = "text" placeholder="Search from name..." onChange={(event) =>{
            setSearchTerm(event.target.value);
          }}
          /><br></br>
          <h2 style={{ color: 'white' }}>Insert infomation</h2>
          <div className="Information">
            <form action="">

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_ID" style={{ color: 'white' }}>ID:</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => { setNPC_ID(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_name" style={{ color: 'white' }}>Name:</label>
                <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => { setName(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_season" style={{ color: 'white' }}>Season:</label>
                <input type="text" className="form-control" placeholder="Enter season" onChange={(event) => { setSeason(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label htmlFor="NPC_bd" style={{ color: 'white' }}>Birthdate:</label>
                <input type="number" className="form-control" placeholder="Enter birthdate" onChange={(event) => { setBD(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_home" style={{ color: 'white' }}>Home:</label>
                <input type="text" className="form-control" placeholder="Enter home" onChange={(event) => { setHome(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_gender" style={{ color: 'white' }}>Gender:</label>
                <input type="text" className="form-control" placeholder="Enter gender" onChange={(event) => { setGender(event.target.value)}}/>
              </div><br/>

              <div className="mb-3">
                <label className="form-label" htmlFor="NPC_status" style={{ color: 'white' }}>Status:</label>
                <input type="text" className="form-control" placeholder="Enter status" onChange={(event) => { setStatus(event.target.value)}}/>
              </div><br/>

              <button class="button2" onClick={addInfo}>
                Add Info
              </button>
            </form>
          </div>
          <br/>
          <h1></h1>
          <div className="Infos">
            <button class="button1" onClick={getInfo}>
              Show Info
            </button>

            <br />
            <br />

            {infoList.filter((val) => {
              if(searchTerm ==="") {
                return val
              } else if (val.NPC_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
              return (

                <div class="container">
                <div class="column">
                <div className="card">
                  <div className="card-body text-left" key={key}>
                    <p className="card-text">Name: {val.NPC_name}</p><br/>
                    <p className="card-text">Season: {val.NPC_season}</p><br/>
                    <p className="card-text">Birthdate: {val.NPC_bd}</p><br/>
                    <p className="card-text">Home: {val.NPC_home}</p><br/>
                    <p className="card-text">Gender: {val.NPC_gender}</p><br/>
                    <p className="card-text">Status: {val.NPC_status}</p><br/>
                </div>
                </div><br/><br/>

                    <div className="d-flex">

                      <div className="mb-3">
                        <label className="form-label" htmlFor="NPC_name" style={{ color: 'white' }}>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={(event) => { setupdateName(event.target.value)}}/>
                      </div><br/>
                      
                      <div className="mb-3">
                        <label className="form-label" htmlFor="NPC_season" style={{ color: 'white' }}>Season:</label>
                        <input type="text" className="form-control" placeholder="Enter season" onChange={(event) => { setupdateSeason(event.target.value)}}/>
                      </div><br/>
                      
                      <div className="mb-3">
                        <label htmlFor="NPC_bd" style={{ color: 'white' }}>Birthdate:</label>
                        <input type="number" className="form-control" placeholder="Enter birthdate" onChange={(event) => { setupdateBD(event.target.value)}}/>
                      </div><br/>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="NPC_home" style={{ color: 'white' }}>Home:</label>
                        <input type="text" className="form-control" placeholder="Enter home" onChange={(event) => { setupdateHome(event.target.value)}}/>
                      </div><br/>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="NPC_gender" style={{ color: 'white' }}>Gender:</label>
                        <input type="text" className="form-control" placeholder="Enter gender" onChange={(event) => { setupdateGender(event.target.value)}}/>
                      </div><br/>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="NPC_status" style={{ color: 'white' }}>Status:</label>
                        <input type="text" className="form-control" placeholder="Enter status" onChange={(event) => { setupdateStatus(event.target.value)}}/>
                      </div><br/><br/>

                      <button class="button1" onClick={() => {updateInfo(val.NPC_ID)}}>Update Info</button>
                      <button class="button3" onClick={() => {deleteInfo(val.NPC_ID)}}>Delete Info</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
}

export default Product;

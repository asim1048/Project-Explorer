import React, { useState,useContext ,useEffect,useRef} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {CatageoryContext} from '../context/AppContext'

import { Navigate } from "react-router-dom";

export default function Auctioneer() {


    const { setItem,socket } = useContext(CatageoryContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [timeLimit, setTimeLimit] = useState(0);
    const [move,setMove]=useState(false);
    // useEffect(() => {
    //     socket.current.on("getMessage", date => {
    //       console.log(date);
    //     })
    //   }, [])

    const addAution=()=>{
        if(timeLimit>=80 || timeLimit<10){
            alert("INVALID TIME LIMIT");
        }
        if(  name=="" || price==0 || timeLimit==0  ){
            alert("Fill all fields first");
        }
        else{
            const input={
                name:name,
                price:price,
                timeLimit:timeLimit,
            }
           // console.log(input)
            setItem(input);
            socket.current.emit("sendMessage", input);
            setMove(true)
        }
        
    }

    return (
        <div style={{
            display: "flex",
            minHeight: '100vh',
            backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
            position: "fixed",
            width: '220vh',
            flexDirection: 'column',

            alignItems: 'center',
            justifyContent: "center",
        }}>
            <div style={{
                display:'flex',
                 width: "25%",
                 height:"70px",
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: "center",
                 backgroundColor:'black',
                 borderRadius:'15px',
                 alignItems: 'center',
                 justifyContent: "center",
            }}>
                <p style={{
                    color: 'white',
                    fontSize: "45px",
                    fontFamily: "serif",
                }}>Auctioneer</p>
            </div>

            <div style={{
                marginTop:'40px',
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
            }}>
                <textarea
                    style={{
                        width: "30%",
                        borderRadius: '5px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'black',
                        borderWidth: '2px',
                        padding: '10px',
                        fontSize: '20px',
                        borderRadius: '15px'
                    }}
                    placeholder="Enter name of Item"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                <textarea
                    style={{
                        marginTop: "30px",
                        width: "30%",
                        borderRadius: '5px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'black',
                        borderWidth: '2px',
                        padding: '10px',
                        fontSize: '20px',
                        borderRadius: '15px'
                    }}
                    placeholder="Enter price of Item"
                    onChange={(e) => {
                        var val = parseInt(e.target.value);
                        if (val < 0) {
                            alert("Price can not be negative")
                        }
                        if (Number.isInteger(val)) {
                            setPrice(val);
                        }
                        else {
                            alert("Invalid Input Type")
                        }
                    }}
                />
                <textarea
                    style={{
                        marginTop: "30px",
                        width: "30%",
                        borderRadius: '5px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'black',
                        borderWidth: '2px',
                        padding: '10px',
                        fontSize: '20px',
                        borderRadius: '15px'
                    }}
                    placeholder="Enter Limit limit (in seconds)"
                    onChange={(e) => {
                        var val = parseInt(e.target.value);
                        if (val < 0) {
                            alert("Time is always positive")
                        }
                        if (Number.isInteger(val)) {
                            setTimeLimit(val);
                        }
                        else {
                            alert("Invalid Input Type")
                        }
                    }}
                />

                <button
                    style={{
                        width: "30%",
                        height:"70px",
                        borderRadius: "45px",
                        background: "blue",
                        borderColor: 'blue',
                        fontSize: '30px',
                        borderWidth: '2px',
                        color: 'white',
                        marginTop: '15px'
                    }}
                    onClick={() => addAution()}
                >Start</button>
            </div>
            {move &&  <Navigate to="/actionerPage" replace={true} />}
        </div>
    )
}
